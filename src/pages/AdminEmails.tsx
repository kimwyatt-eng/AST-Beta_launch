import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, AlertTriangle, CheckCircle, Ban, ChevronLeft, ChevronRight, Lock, ArrowLeft, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TimeRange = "24h" | "7d" | "30d" | "custom";

interface Stats {
  total: number;
  sent: number;
  failed: number;
  suppressed: number;
  bounced: number;
}

interface LogEntry {
  id: string;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  created_at: string;
  message_id: string;
}

interface Submission {
  id: string;
  name: string;
  email: string;
  inquiry_type: string;
  message: string;
  created_at: string;
}

const statusBadge = (status: string) => {
  switch (status) {
    case "sent":
      return <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">Sent</Badge>;
    case "dlq":
    case "failed":
      return <Badge className="bg-red-600/20 text-red-400 border-red-600/30">Failed</Badge>;
    case "suppressed":
      return <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30">Suppressed</Badge>;
    case "bounced":
    case "complained":
      return <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">Bounced</Badge>;
    case "pending":
      return <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">Pending</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const inquiryBadge = (type: string) => {
  switch (type) {
    case "partner":
      return <Badge className="bg-violet-600/20 text-violet-400 border-violet-600/30">Partner</Badge>;
    case "investor":
      return <Badge className="bg-sky-600/20 text-sky-400 border-sky-600/30">Investor</Badge>;
    default:
      return <Badge variant="outline">{type}</Badge>;
  }
};

const getDateRange = (range: TimeRange): { start: string; end: string } => {
  const end = new Date().toISOString();
  const now = new Date();
  switch (range) {
    case "24h":
      return { start: new Date(now.getTime() - 86400000).toISOString(), end };
    case "7d":
      return { start: new Date(now.getTime() - 7 * 86400000).toISOString(), end };
    case "30d":
      return { start: new Date(now.getTime() - 30 * 86400000).toISOString(), end };
    default:
      return { start: new Date(now.getTime() - 7 * 86400000).toISOString(), end };
  }
};

const AdminEmails = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("emails");

  const [timeRange, setTimeRange] = useState<TimeRange>("7d");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");
  const [templateFilter, setTemplateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);

  const [stats, setStats] = useState<Stats>({ total: 0, sent: 0, failed: 0, suppressed: 0, bounced: 0 });
  const [templates, setTemplates] = useState<string[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [totalLogs, setTotalLogs] = useState(0);

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [submissionsPage, setSubmissionsPage] = useState(0);

  const storedPw = typeof window !== "undefined" ? sessionStorage.getItem("admin_pw") : null;

  useEffect(() => {
    if (storedPw) {
      setPassword(storedPw);
      setAuthed(true);
    }
  }, [storedPw]);

  const apiFetch = useCallback(
    async (resource: string, params: Record<string, string> = {}) => {
      const pw = password || storedPw || "";
      const searchParams = new URLSearchParams({ resource, ...params });
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-dashboard?${searchParams}`;
      const res = await fetch(url, {
        headers: {
          "x-admin-password": pw,
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        },
      });
      if (res.status === 401) throw new Error("Unauthorized");
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    },
    [password, storedPw]
  );

  const handleLogin = async () => {
    setAuthError("");
    try {
      const range = getDateRange("7d");
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-dashboard?resource=stats&start=${range.start}&end=${range.end}`;
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
      await res.json();
      sessionStorage.setItem("admin_pw", password);
      setAuthed(true);
    } catch {
      setAuthError("Connection error");
    }
  };

  const fetchEmailData = useCallback(async () => {
    setLoading(true);
    try {
      const range =
        timeRange === "custom" && customStart && customEnd
          ? { start: new Date(customStart).toISOString(), end: new Date(customEnd + "T23:59:59").toISOString() }
          : getDateRange(timeRange);

      const [statsData, logsData] = await Promise.all([
        apiFetch("stats", { start: range.start, end: range.end }),
        apiFetch("logs", {
          start: range.start,
          end: range.end,
          page: String(page),
          ...(templateFilter !== "all" ? { template: templateFilter } : {}),
          ...(statusFilter !== "all" ? { status: statusFilter } : {}),
        }),
      ]);

      setStats(statsData.stats);
      setTemplates(statsData.templates);
      setLogs(logsData.logs);
      setTotalLogs(logsData.total);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [apiFetch, timeRange, customStart, customEnd, templateFilter, statusFilter, page]);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiFetch("submissions", { page: String(submissionsPage) });
      setSubmissions(data.submissions || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [apiFetch, submissionsPage]);

  useEffect(() => {
    if (authed && activeTab === "emails") fetchEmailData();
  }, [authed, activeTab, fetchEmailData]);

  useEffect(() => {
    if (authed && activeTab === "submissions") fetchSubmissions();
  }, [authed, activeTab, fetchSubmissions]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm border-border bg-card">
          <CardContent className="pt-6 space-y-4">
            <div className="flex flex-col items-center gap-2 mb-4">
              <Lock className="h-8 w-8 text-muted-foreground" />
              <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground text-center">Enter your admin password to continue</p>
            </div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="bg-background/50"
            />
            {authError && <p className="text-sm text-destructive">{authError}</p>}
            <Button onClick={handleLogin} className="w-full">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalPages = Math.ceil(totalLogs / 50);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Monitor emails and contact submissions</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => (activeTab === "emails" ? fetchEmailData() : fetchSubmissions())}
            disabled={loading}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v)}>
          <TabsList>
            <TabsTrigger value="emails" className="gap-1.5">
              <Mail className="h-4 w-4" /> Emails
            </TabsTrigger>
            <TabsTrigger value="submissions" className="gap-1.5">
              <MessageSquare className="h-4 w-4" /> Submissions
            </TabsTrigger>
          </TabsList>

          {/* ── Emails Tab ── */}
          <TabsContent value="emails" className="space-y-6">
            {/* Time Range */}
            <div className="flex flex-wrap gap-2 items-center">
              {(["24h", "7d", "30d", "custom"] as TimeRange[]).map((r) => (
                <Button
                  key={r}
                  size="sm"
                  variant={timeRange === r ? "default" : "outline"}
                  onClick={() => { setTimeRange(r); setPage(0); }}
                >
                  {r === "24h" ? "Last 24h" : r === "7d" ? "Last 7 days" : r === "30d" ? "Last 30 days" : "Custom"}
                </Button>
              ))}
              {timeRange === "custom" && (
                <div className="flex gap-2 items-center">
                  <Input type="date" value={customStart} onChange={(e) => setCustomStart(e.target.value)} className="w-36 h-8" />
                  <span className="text-muted-foreground text-sm">to</span>
                  <Input type="date" value={customEnd} onChange={(e) => setCustomEnd(e.target.value)} className="w-36 h-8" />
                </div>
              )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div><p className="text-2xl font-bold">{stats.total}</p><p className="text-xs text-muted-foreground">Total</p></div>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <div><p className="text-2xl font-bold">{stats.sent}</p><p className="text-xs text-muted-foreground">Sent</p></div>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <div><p className="text-2xl font-bold">{stats.failed}</p><p className="text-xs text-muted-foreground">Failed</p></div>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <Ban className="h-5 w-5 text-amber-400" />
                  <div><p className="text-2xl font-bold">{stats.suppressed}</p><p className="text-xs text-muted-foreground">Suppressed</p></div>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                  <div><p className="text-2xl font-bold">{stats.bounced}</p><p className="text-xs text-muted-foreground">Bounced</p></div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={templateFilter} onValueChange={(v) => { setTemplateFilter(v); setPage(0); }}>
                <SelectTrigger className="w-56"><SelectValue placeholder="All templates" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All templates</SelectItem>
                  {templates.map((t) => (<SelectItem key={t} value={t}>{t}</SelectItem>))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(0); }}>
                <SelectTrigger className="w-40"><SelectValue placeholder="All statuses" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="suppressed">Suppressed</SelectItem>
                  <SelectItem value="bounced">Bounced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Email Log Table */}
            <Card className="border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Template</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Error</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {logs.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                          No emails found for this time range
                        </TableCell>
                      </TableRow>
                    ) : (
                      logs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell className="font-mono text-xs">{log.template_name}</TableCell>
                          <TableCell className="text-sm">{log.recipient_email}</TableCell>
                          <TableCell>{statusBadge(log.status)}</TableCell>
                          <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                            {new Date(log.created_at).toLocaleString()}
                          </TableCell>
                          <TableCell className="text-xs text-destructive max-w-48 truncate">
                            {log.error_message || "—"}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-4 py-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Page {page + 1} of {totalPages} ({totalLogs} emails)
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled={page === 0} onClick={() => setPage(page - 1)}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* ── Submissions Tab ── */}
          <TabsContent value="submissions" className="space-y-6">
            <Card className="border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                          No submissions yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      submissions.map((s) => (
                        <TableRow key={s.id}>
                          <TableCell className="font-medium text-sm">{s.name}</TableCell>
                          <TableCell className="text-sm">{s.email}</TableCell>
                          <TableCell>{inquiryBadge(s.inquiry_type)}</TableCell>
                          <TableCell className="text-sm max-w-xs truncate">{s.message}</TableCell>
                          <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                            {new Date(s.created_at).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
              {submissions.length >= 50 && (
                <div className="flex items-center justify-between px-4 py-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">Page {submissionsPage + 1}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled={submissionsPage === 0} onClick={() => setSubmissionsPage(submissionsPage - 1)}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setSubmissionsPage(submissionsPage + 1)}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminEmails;
