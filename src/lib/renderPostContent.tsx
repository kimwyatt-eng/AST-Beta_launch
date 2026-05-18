import React from "react";

// Tiny markdown-lite renderer: supports paragraphs, ## headings,
// - lists, **bold**, *italic*, [text](url). No external deps.

function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Tokenize: links, bold, italic
  const regex = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)|(\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    const key = `${keyBase}-${i++}`;
    if (token.startsWith("[")) {
      const m = /\[([^\]]+)\]\(([^)]+)\)/.exec(token);
      if (m) {
        const isInternal = m[2].startsWith("/") || m[2].startsWith("#");
        nodes.push(
          <a
            key={key}
            href={m[2]}
            className="text-secondary underline underline-offset-4 hover:opacity-80"
            {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          >
            {m[1]}
          </a>,
        );
      }
    } else if (token.startsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*")) {
      nodes.push(<em key={key}>{token.slice(1, -1)}</em>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export function renderPostContent(markdown: string): React.ReactNode {
  const blocks = markdown.split(/\n\n+/);
  const out: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return;
    out.push(
      <ul key={key} className="mt-4 mb-4 space-y-2 list-disc list-inside text-foreground/85">
        {listBuffer.map((item, idx) => (
          <li key={`${key}-${idx}`}>{renderInline(item, `${key}-${idx}`)}</li>
        ))}
      </ul>,
    );
    listBuffer = [];
  };

  blocks.forEach((block, bi) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("## ")) {
      flushList(`list-${bi}`);
      out.push(
        <h2 key={`h-${bi}`} className="mt-10 mb-3 text-2xl md:text-3xl font-bold tracking-tight title-violet">
          {trimmed.slice(3)}
        </h2>,
      );
      return;
    }

    // Numbered or bulleted list block
    if (/^(\d+\.\s|-\s)/.test(trimmed)) {
      const lines = trimmed.split(/\n/).map((l) => l.replace(/^(\d+\.\s|-\s)/, "").trim());
      listBuffer.push(...lines);
      flushList(`list-${bi}`);
      return;
    }

    flushList(`list-${bi}`);
    out.push(
      <p key={`p-${bi}`} className="mt-4 text-foreground/85 leading-relaxed">
        {renderInline(trimmed, `p-${bi}`)}
      </p>,
    );
  });
  flushList("list-end");
  return out;
}
