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

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const components = {
  h1: ({ children, ...props }: any) => (
    <h1
      className="mb-6 mt-10 text-4xl font-black text-blue-600 leading-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2
      className="mb-5 mt-10 text-3xl font-bold text-slate-900 dark:text-white border-b-2 border-blue-500/30 pb-3"
      {...props}
    >
      <span className="flex items-center gap-3">
        <span className="w-1 h-8 bg-blue-500 rounded-full" />
        {children}
      </span>
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3
      className="mb-4 mt-8 text-2xl font-bold text-slate-800 dark:text-slate-100"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4
      className="mb-3 mt-6 text-xl font-semibold text-slate-800 dark:text-slate-200"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5
      className="mb-3 mt-5 text-lg font-semibold text-slate-700 dark:text-slate-300"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6
      className="mb-2 mt-4 text-base font-semibold text-slate-700 dark:text-slate-300"
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
        className="mb-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300"
        {...props}
      >
        {children}
      </p>
    );
  },
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-blue-500/40 underline-offset-2 hover:decoration-blue-500 transition-all duration-200"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  ),
  ul: ({ children, ...props }: any) => (
    <ul
      className="mb-6 ml-2 space-y-3 text-slate-700 dark:text-slate-300"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol
      className="mb-6 ml-2 space-y-3 text-slate-700 dark:text-slate-300 list-none counter-reset-item"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ordered, index, ...props }: any) => (
    <li className="flex items-start gap-3 text-lg leading-relaxed" {...props}>
      <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-500" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="my-8 relative pl-6 py-4 pr-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-xl italic text-slate-700 dark:text-slate-300"
      {...props}
    >
      <span className="absolute -left-3 -top-2 text-4xl text-blue-300 dark:text-blue-700 font-serif">"</span>
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
          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-pink-600 dark:text-pink-400 font-mono text-[0.9em] font-medium"
          {...props}
        >
          {children}
        </code>
      );
    }

    // Block code
    return (
      <div className="my-8 group shadow-2xl rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            {language}
          </span>
          <div className="flex gap-1.5 bg-slate-800/50 p-1.5 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
        </div>
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={language}
          PreTag="div"
          className="!mt-0 !rounded-none text-sm !bg-[#1e1e1e]"
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
    <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
      <table className="w-full border-collapse text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-slate-100 dark:bg-slate-800" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: any) => (
    <tbody
      className="divide-y divide-slate-200 dark:divide-slate-700"
      {...props}
    >
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: any) => (
    <tr
      className="transition-colors hover:bg-blue-50/50 dark:hover:bg-slate-800/50"
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ children, ...props }: any) => (
    <th
      className="px-5 py-4 font-bold text-slate-900 dark:text-slate-100 uppercase text-xs tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="px-5 py-4 text-slate-700 dark:text-slate-300" {...props}>
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
      <span className="flex-1 h-px bg-slate-300 dark:bg-slate-600" />
      <span className="text-slate-400">✦</span>
      <span className="flex-1 h-px bg-slate-300 dark:bg-slate-600" />
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
          note: 'border-blue-500 bg-blue-50/80 dark:bg-blue-900/20',
          info: 'border-blue-500 bg-blue-50/80 dark:bg-blue-900/20',
          tip: 'border-green-500 bg-green-50/80 dark:bg-green-900/20',
          warning: 'border-yellow-500 bg-yellow-50/80 dark:bg-yellow-900/20',
          caution: 'border-red-500 bg-red-50/80 dark:bg-red-900/20',
          important: 'border-purple-500 bg-purple-50/80 dark:bg-purple-900/20',
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
            <div className="flex items-center gap-2 mb-2 font-semibold text-slate-900 dark:text-white">
              <span className="text-lg">{icons[alertType]}</span>
              <span className="uppercase text-sm tracking-wide">{alertType}</span>
            </div>
            <div className="text-slate-700 dark:text-slate-300">
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
