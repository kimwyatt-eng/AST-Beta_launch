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

function splitRow(line: string): string[] {
  let s = line.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|")) s = s.slice(0, -1);
  return s.split("|").map((c) => c.trim());
}

function isTableBlock(block: string): boolean {
  const lines = block.split(/\n/);
  if (lines.length < 2) return false;
  return lines[0].includes("|") && /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(lines[1]);
}

function renderTable(block: string, key: string): React.ReactNode {
  const lines = block.split(/\n/).filter((l) => l.trim().length > 0);
  const header = splitRow(lines[0]);
  const bodyRows = lines.slice(2).map(splitRow);
  return (
    <div key={key} className="mt-6 mb-6 overflow-x-auto rounded-lg border border-border/60">
      <table className="w-full text-sm text-left text-foreground/85 border-collapse">
        <thead className="bg-foreground/5 text-foreground">
          <tr>
            {header.map((cell, i) => (
              <th key={i} className="px-3 py-2 font-semibold border-b border-border/60 align-top">
                {renderInline(cell, `${key}-h-${i}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, ri) => (
            <tr key={ri} className="odd:bg-foreground/[0.02]">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 border-b border-border/40 align-top">
                  {renderInline(cell, `${key}-${ri}-${ci}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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

    // Standalone image block: ![alt](url) or ![alt|caption](url)
    const imgMatch = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(trimmed);
    if (imgMatch) {
      flushList(`list-${bi}`);
      const [altRaw, captionRaw] = imgMatch[1].split("|");
      const alt = altRaw?.trim() ?? "";
      const caption = captionRaw?.trim();
      out.push(
        <figure key={`img-${bi}`} className="my-6">
          <img
            src={imgMatch[2]}
            alt={alt}
            loading="lazy"
            className="w-full h-auto rounded-lg border border-border/60"
          />
          {caption && (
            <figcaption className="mt-2 text-sm text-foreground/70 text-center">
              {caption}
            </figcaption>
          )}
        </figure>,
      );
      return;
    }

    // Blockquote: lines starting with >
    if (trimmed.startsWith("> ")) {
      flushList(`list-${bi}`);
      const text = trimmed
        .split(/\n/)
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      out.push(
        <blockquote
          key={`q-${bi}`}
          className="mt-6 mb-6 border-l-4 border-secondary/60 pl-4 italic text-foreground/85"
        >
          {renderInline(text, `q-${bi}`)}
        </blockquote>,
      );
      return;
    }

    if (isTableBlock(trimmed)) {
      flushList(`list-${bi}`);
      out.push(renderTable(trimmed, `t-${bi}`));
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushList(`list-${bi}`);
      out.push(
        <h3 key={`h3-${bi}`} className="mt-8 mb-2 text-xl md:text-2xl font-semibold tracking-tight text-foreground">
          {trimmed.slice(4)}
        </h3>,
      );
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushList(`list-${bi}`);
      out.push(
        <h2 key={`h-${bi}`} className="mt-10 mb-3 text-2xl md:text-3xl font-bold tracking-tight title-violet">
          {trimmed.slice(3)}
        </h2>,
      );
      return;
    }

    // Numbered or bulleted list block (-, * bullets)
    if (/^(\d+\.\s|[-*]\s)/.test(trimmed)) {
      const lines = trimmed.split(/\n/).map((l) => l.replace(/^(\d+\.\s|[-*]\s)/, "").trim());
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
