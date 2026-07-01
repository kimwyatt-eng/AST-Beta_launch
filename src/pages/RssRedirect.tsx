import { useEffect } from "react";

export default function RssRedirect() {
  useEffect(() => {
    window.location.replace("/rss.xml");
  }, []);
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Redirecting…</h1>
      <p>
        The feed has moved to <a href="/rss.xml">/rss.xml</a>.
      </p>
    </main>
  );
}
