import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MermaidDiagram from "./MermaidDiagram";
import "katex/dist/katex.min.css";
import { ArrowSquareOut } from "@phosphor-icons/react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const components = {
  h1: ({ children, ...props }: any) => (
    <h1
      className="mb-6 mt-10 text-4xl font-black text-[#ea4c3c] leading-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2
      className="mb-5 mt-10 text-3xl font-bold text-foreground border-b-2 border-primary/30 pb-3"
      {...props}
    >
      <span className="flex items-center gap-3">
        <span className="w-1 h-8 bg-primary rounded-full" />
        {children}
      </span>
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3
      className="mb-4 mt-8 text-2xl font-bold text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4
      className="mb-3 mt-6 text-xl font-semibold text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5
      className="mb-3 mt-5 text-lg font-semibold text-muted-foreground"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6
      className="mb-2 mt-4 text-base font-semibold text-muted-foreground"
      {...props}
    >
      {children}
    </h6>
  ),
  // Use div instead of p to avoid nesting issues
  p: ({ children, node, ...props }: any) => {
    // Check if children contain block elements that shouldn't be in <p>
    const hasBlockElement = React.Children.toArray(children).some((child) => {
      if (React.isValidElement(child)) {
        const type = child.type;
        // Check for string tags or component display names
        if (typeof type === 'string') {
          return ["img", "div", "figure", "table", "video", "blockquote", "pre", "hr", "ul", "ol"].includes(type);
        }
        // Check for function components that render block elements
        if (typeof type === 'function') {
          const name = (type as any).displayName || (type as any).name || '';
          return ["img", "ClickableImage", "code", "video"].includes(name);
        }
      }
      return false;
    });

    // Also check for image or code in node children (from markdown AST)
    const hasBlockInNode = node?.children?.some((child: any) => 
      child.tagName === 'img' || child.type === 'image' || 
      child.tagName === 'code' || child.tagName === 'pre'
    );

    if (hasBlockElement || hasBlockInNode) {
      return <div className="mb-4">{children}</div>;
    }

    return (
      <p
        className="mb-5 text-lg leading-relaxed text-muted-foreground"
        {...props}
      >
        {children}
      </p>
    );
  },
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary/90 underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition-all duration-200"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <ArrowSquareOut className="w-3.5 h-3.5 opacity-60" />
    </a>
  ),
  ul: ({ children, ...props }: any) => (
    <ul
      className="mb-6 ml-2 space-y-3 text-muted-foreground"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol
      className="mb-6 ml-2 space-y-3 text-muted-foreground list-none counter-reset-item"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ordered, index, ...props }: any) => (
    <li className="flex items-start gap-3 text-lg leading-relaxed" {...props}>
      <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="my-8 relative pl-6 py-4 pr-4 border-l-4 border-primary bg-primary/10 rounded-r-xl italic text-muted-foreground"
      {...props}
    >
      <span className="absolute -left-3 -top-2 text-4xl text-primary/40 font-serif">"</span>
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "text";
    const childrenStr = String(children).replace(/\n$/, "");
    
    // Heuristic for inline vs block:
    // 1. If language is specified (e.g. ```js), it's a block.
    // 2. If content has newlines, it's likely a block.
    // 3. Otherwise, treat as inline.
    const isBlock = match || String(children).includes("\n");

    if (language === "mermaid") {
      return <MermaidDiagram code={childrenStr} />;
    }

    // Inline code
    if (!isBlock) {
      return (
        <code
          className="px-2 py-0.5 rounded-md bg-muted text-primary font-mono text-[0.9em] font-medium"
          {...props}
        >
          {children}
        </code>
      );
    }

    // Block code
    return (
      <div className="my-8 group shadow-none rounded-xl overflow-hidden border border-border">
        <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            {language}
          </span>
          <div className="flex gap-1.5 bg-muted p-1.5 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-primary/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
          </div>
        </div>
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={language}
          PreTag="div"
          className="!mt-0 !rounded-none text-sm !bg-[#121212]"
          showLineNumbers
          customStyle={{
            margin: 0,
            padding: '1.5rem',
          }}
          {...props}
        >
          {childrenStr}
        </SyntaxHighlighter>
      </div>
    );
  },
  table: ({ children, ...props }: any) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-border shadow-none bg-card">
      <table className="w-full border-collapse text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-muted" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: any) => (
    <tbody
      className="divide-y divide-border"
      {...props}
    >
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: any) => (
    <tr
      className="transition-colors hover:bg-primary/5"
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ children, ...props }: any) => (
    <th
      className="px-5 py-4 font-bold text-foreground uppercase text-xs tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="px-5 py-4 text-muted-foreground" {...props}>
      {children}
    </td>
  ),
  // Simple image component
  img: ({ src, alt, ...props }: any) => (
    <span className="block my-8">
      <img
        src={src}
        alt={alt || ""}
        className="mx-auto rounded-2xl shadow-xl max-w-full h-auto transition-transform hover:scale-[1.02] duration-300"
        loading="lazy"
        {...props}
      />
      {alt && (
        <span className="block mt-3 text-center text-sm italic text-slate-500 dark:text-slate-400">
          {alt}
        </span>
      )}
    </span>
  ),
  hr: ({ ...props }: any) => (
    <div className="my-12 flex items-center justify-center gap-3">
      <span className="flex-1 h-px bg-border" />
      <span className="text-primary">✦</span>
      <span className="flex-1 h-px bg-border" />
    </div>
  ),
  video: ({ src, ...props }: any) => (
    <span className="block my-8">
      <video
        src={src}
        controls
        className="mx-auto w-full max-w-4xl rounded-2xl shadow-xl"
        {...props}
      />
    </span>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-bold text-slate-900 dark:text-white" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: any) => (
    <em className="italic text-slate-700 dark:text-slate-300" {...props}>
      {children}
    </em>
  ),
  del: ({ children, ...props }: any) => (
    <del className="line-through text-slate-500 dark:text-slate-400 opacity-70" {...props}>
      {children}
    </del>
  ),
  // GitHub-style alerts
  div: ({ children, className, ...props }: any) => {
    // Check for custom alert types
    if (className?.includes('markdown-alert')) {
      const alertType = className.includes('note') ? 'note'
        : className.includes('tip') ? 'tip'
        : className.includes('warning') ? 'warning'
        : className.includes('caution') ? 'caution'
        : className.includes('important') ? 'important'
        : className.includes('info') ? 'info'
        : null;

      if (alertType) {
        const styles: Record<string, string> = {
          note: 'border-border bg-card',
          info: 'border-border bg-card',
          tip: 'border-green-600 bg-green-500/10 text-green-700 dark:text-green-400',
          warning: 'border-yellow-600 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
          caution: 'border-primary bg-primary/10 text-foreground',
          important: 'border-primary bg-primary/10 text-foreground',
        };

        const icons: Record<string, string> = {
          note: '📝',
          info: 'ℹ️',
          tip: '💡',
          warning: '⚠️',
          caution: '🚫',
          important: '🔥',
        };

        return (
          <div className={`my-6 p-5 border-l-4 rounded-r-lg ${styles[alertType]}`} {...props}>
            <div className="flex items-center gap-2 mb-2 font-semibold text-foreground">
              <span className="text-lg">{icons[alertType]}</span>
              <span className="uppercase text-sm tracking-wide">{alertType}</span>
            </div>
            <div className="text-muted-foreground">
              {children}
            </div>
          </div>
        );
      }
    }

    return <div className={className} {...props}>{children}</div>;
  },
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content = "",
  className = "",
}) => {
  return (
    <div
      className={`prose prose-lg prose-slate max-w-none dark:prose-invert 
        prose-headings:scroll-mt-20
        prose-pre:p-0 prose-pre:bg-transparent
        ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
