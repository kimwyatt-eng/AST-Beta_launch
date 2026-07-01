import { useState } from "react";
import { Link2, Check, Twitter, Facebook } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

export default function ShareButtons({ url, title, description, image }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description ?? "");
  const encodedImage = encodeURIComponent(image ?? "");

  const twitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const pinterest = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`;
  const reddit = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const btn =
    "inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-foreground/90 hover:bg-white/10 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="mt-10">
      <p className="text-xs uppercase tracking-wider text-[#B7AFD8] mb-3">Share this article</p>
      <div className="flex flex-wrap gap-2">
        <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className={btn}>
          <Twitter className="h-4 w-4" aria-hidden="true" />
          <span>X</span>
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className={btn}>
          <Facebook className="h-4 w-4" aria-hidden="true" />
          <span>Facebook</span>
        </a>
        <a href={pinterest} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className={btn}>
          <span aria-hidden="true" className="font-bold">P</span>
          <span>Pinterest</span>
        </a>
        <a href={reddit} target="_blank" rel="noopener noreferrer" aria-label="Share on Reddit" className={btn}>
          <span aria-hidden="true" className="font-bold">r/</span>
          <span>Reddit</span>
        </a>
        <button type="button" onClick={copy} aria-label="Copy link" className={btn}>
          {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
          <span>{copied ? "Copied!" : "Copy link"}</span>
        </button>
      </div>
    </div>
  );
}
