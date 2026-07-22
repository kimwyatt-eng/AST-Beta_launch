import { useEffect, useState } from "react";

// Change this password to rotate access. Share it privately with investors.
// Note: this is a client-side view gate, not real security — the value ships in
// the frontend bundle. Do not use it to protect sensitive data.
const INVESTORS_PASSWORD = "studio2026";

const STORAGE_KEY = "investors-gate-unlocked";

interface Props {
  children: React.ReactNode;
}

const InvestorsGate = ({ children }: Props) => {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === INVESTORS_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      setError(null);
    } else {
      setError("Incorrect password.");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-wine-plum flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
      >
        <h1 className="text-2xl font-semibold text-white mb-2">
          Investor Access
        </h1>
        <p className="text-[#B7AFD8] text-sm mb-6">
          This page is private. Enter the access password shared with you to continue.
        </p>
        <label className="block">
          <span className="sr-only">Password</span>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            className="w-full rounded-md bg-black/30 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00E6FF]"
            placeholder="Password"
          />
        </label>
        {error && (
          <p className="mt-3 text-sm text-red-300" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-[#00E6FF] text-black font-semibold py-3 hover:bg-[#00c8dd] transition-colors"
        >
          Unlock
        </button>
        <p className="mt-6 text-xs text-white/50">
          Need access? Email{" "}
          <a className="underline" href="mailto:founder@artsupplytracker.com">
            founder@artsupplytracker.com
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default InvestorsGate;
