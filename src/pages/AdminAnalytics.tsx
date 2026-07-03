import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Lock, ArrowLeft, TrendingUp, MousePointerClick, Eye, Target, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type Range = "7d" | "28d" | "90d" | "custom";

interface Row {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface AnalyticsPayload {
  range: { startDate: string; endDate: string };
  totals: { clicks: number; impressions: number; ctr: number; position: number };
  timeseries: Row[];
  topPages: Row[];
  topQueries: Row[];
  devices: Row[];
  countries: Row[];
}

const rangeToDates = (r: Range): { start: string; end: string } => {
  const end = new Date().toISOString().slice(0, 10);
  const days = r === "7d" ? 7 : r === "90d" ? 90 : 28;
  const start = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
  return { start, end };
};

const PIE_COLORS = ["hsl(var(--primary))", "#a78bfa", "#f472b6", "#fbbf24", "#34d399", "#60a5fa"];

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<AnalyticsPayload | null>(null);

  const [range, setRange] = useState<Range>("28d");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");

  const storedPw =
    typeof window !== "undefined" ? sessionStorage.getItem("admin_pw") : null;

  useEffect(() => {
    if (storedPw) {
      setPassword(storedPw);
      setAuthed(true);
    }
  }, [storedPw]);

  const fetchData = useCallback(async () => {
    const pw = password || storedPw || "";
    const dates =
      range === "custom" && customStart && customEnd
        ? { start: customStart, end: customEnd }
        : rangeToDates(range);
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-analytics?start=${dates.start}&end=${dates.end}`;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(url, {
        headers: {
          "x-admin-password": pw,
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        },
      });
      if (res.status === 401) throw new Error("Unauthorized");
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = (await res.json()) as AnalyticsPayload;
      setData(json);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [password, storedPw, range, customStart, customEnd]);

  useEffect(() => {
    if (authed) fetchData();
  }, [authed, fetchData]);

  const handleLogin = async () => {
    setAuthError("");
    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-analytics`;
      const res = await fetch(url, {
        headers: {
          "x-admin-password": password,
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        },
      });
      if (res.status === 401) {
        setAuthError("Incorrect password");
        return;
      }
      sessionStorage.setItem("admin_pw", password);
      setAuthed(true);
    } catch {
      setAuthError("Connection error");
    }
  };

  const chartData = useMemo(
    () =>
      (data?.timeseries || []).map((r) => ({
        date: r.keys[0].slice(5),
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: +(r.ctr * 100).toFixed(2),
        position: +r.position.toFixed(1),
      })),
    [data]
  );

  const deviceData = useMemo(
    () =>
      (data?.devices || []).map((r) => ({
        name: r.keys[0],
        value: r.clicks,
      })),
    [data]
  );

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm border-border bg-card">
          <CardContent className="pt-6 space-y-4">
            <div className="flex flex-col items-center gap-2 mb-4">
              <Lock className="h-8 w-8 text-muted-foreground" />
              <h1 className="text-lg font-semibold text-foreground">
                Analytics Dashboard
              </h1>
              <p className="text-sm text-muted-foreground text-center">
                Enter your admin password to continue
              </p>
            </div>
            <Input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            {authError && (
              <p className="text-sm text-destructive">{authError}</p>
            )}
            <Button onClick={handleLogin} className="w-full">
              Sign in
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/admin/emails")}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Admin
            </Button>
            <h1 className="text-2xl font-semibold text-foreground">
              Search Analytics
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select value={range} onValueChange={(v) => setRange(v as Range)}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="28d">Last 28 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            {range === "custom" && (
              <>
                <Input
                  type="date"
                  value={customStart}
                  onChange={(e) => setCustomStart(e.target.value)}
                  className="w-40"
                />
                <Input
                  type="date"
                  value={customEnd}
                  onChange={(e) => setCustomEnd(e.target.value)}
                  className="w-40"
                />
              </>
            )}
            <Button onClick={fetchData} disabled={loading} size="sm">
              {loading ? "Loading…" : "Refresh"}
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Data from Google Search Console for {data?.range.startDate} → {data?.range.endDate}.
        </p>

        {error && (
          <Card className="border-destructive/40 bg-destructive/10">
            <CardContent className="pt-4 text-sm text-destructive">{error}</CardContent>
          </Card>
        )}

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard
            icon={<MousePointerClick className="h-4 w-4" />}
            label="Clicks"
            value={data?.totals.clicks.toLocaleString() ?? "—"}
          />
          <KpiCard
            icon={<Eye className="h-4 w-4" />}
            label="Impressions"
            value={data?.totals.impressions.toLocaleString() ?? "—"}
          />
          <KpiCard
            icon={<Target className="h-4 w-4" />}
            label="Avg CTR"
            value={
              data ? `${(data.totals.ctr * 100).toFixed(2)}%` : "—"
            }
          />
          <KpiCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="Avg Position"
            value={data ? data.totals.position.toFixed(1) : "—"}
          />
        </div>

        {/* Time series */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base">Clicks & Impressions over time</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <YAxis yAxisId="left" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="impressions" stroke="#a78bfa" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* CTR + Position */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">CTR (%)</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }} />
                  <Line type="monotone" dataKey="ctr" stroke="#34d399" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Avg Position (lower is better)</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                  <YAxis reversed tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }} />
                  <Line type="monotone" dataKey="position" stroke="#fbbf24" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Devices + Countries */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Devices (clicks)</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={deviceData} dataKey="value" nameKey="name" outerRadius={80} label>
                    {deviceData.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Top Countries (clicks)</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={(data?.countries || []).slice(0, 8).map((r) => ({ name: r.keys[0].toUpperCase(), clicks: r.clicks }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 6 }} />
                  <Bar dataKey="clicks" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top pages */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base">Top Landing Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead className="text-right">Clicks</TableHead>
                  <TableHead className="text-right">Impressions</TableHead>
                  <TableHead className="text-right">CTR</TableHead>
                  <TableHead className="text-right">Position</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(data?.topPages || []).map((r) => (
                  <TableRow key={r.keys[0]}>
                    <TableCell className="max-w-md truncate">
                      <a href={r.keys[0]} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        {r.keys[0].replace(/^https?:\/\/[^/]+/, "") || "/"}
                      </a>
                    </TableCell>
                    <TableCell className="text-right">{r.clicks}</TableCell>
                    <TableCell className="text-right">{r.impressions}</TableCell>
                    <TableCell className="text-right">{(r.ctr * 100).toFixed(1)}%</TableCell>
                    <TableCell className="text-right">{r.position.toFixed(1)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top queries */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Search className="h-4 w-4" /> Top Search Queries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Query</TableHead>
                  <TableHead className="text-right">Clicks</TableHead>
                  <TableHead className="text-right">Impressions</TableHead>
                  <TableHead className="text-right">CTR</TableHead>
                  <TableHead className="text-right">Position</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(data?.topQueries || []).map((r) => (
                  <TableRow key={r.keys[0]}>
                    <TableCell>{r.keys[0]}</TableCell>
                    <TableCell className="text-right">{r.clicks}</TableCell>
                    <TableCell className="text-right">{r.impressions}</TableCell>
                    <TableCell className="text-right">{(r.ctr * 100).toFixed(1)}%</TableCell>
                    <TableCell className="text-right">{r.position.toFixed(1)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const KpiCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <Card className="bg-card border-border">
    <CardContent className="pt-4">
      <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-2xl font-semibold text-foreground">{value}</div>
    </CardContent>
  </Card>
);

export default AdminAnalytics;
