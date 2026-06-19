import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import { cn } from '@/lib/utils';
import { WarningCircle, Warning, Check, Info, WarningOctagon } from '@phosphor-icons/react';

interface MarkdownRenderProps {
  content: string;
  className?: string;
}

// Helper to extract text content recursively
const extractTextContent = (node: any): string => {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractTextContent).join('');
  if (node.children) return extractTextContent(node.children);
  return '';
};

// Custom blockquote component to handle alerts and code groups
const BlockquoteComponent: Components['blockquote'] = ({ node, ...props }) => {
  const children = props.children;

  // Check if it's a custom alert
  const textContent = extractTextContent(children);

  if (textContent.startsWith('TIP:')) {
    return (
      <div className="my-4 p-4 bg-green-900/20 border-l-4 border-green-500 rounded-r-md">
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-green-500">Tip</p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  if (textContent.startsWith('WARNING:')) {
    return (
      <div className="my-4 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-md">
        <div className="flex items-start gap-3">
          <Warning className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-500">Warning</p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  if (textContent.startsWith('CAUTION:')) {
    return (
      <div className="my-4 p-4 bg-orange-900/20 border-l-4 border-orange-500 rounded-r-md">
        <div className="flex items-start gap-3">
          <WarningOctagon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-orange-500">Caution</p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  if (textContent.startsWith('IMPORTANT:')) {
    return (
      <div className="my-4 p-4 bg-red-900/20 border-l-4 border-red-500 rounded-r-md">
        <div className="flex items-start gap-3">
          <WarningCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-500">Important</p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  if (textContent.startsWith('NOTE:')) {
    return (
      <div className="my-4 p-4 bg-blue-900/20 border-l-4 border-blue-500 rounded-r-md">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-blue-500">Note</p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }

  // Default blockquote
  return (
    <blockquote className="border-l-4 border-accent pl-4 py-1 my-4 bg-black/20">
      {children}
    </blockquote>
  );
};

export const MarkdownRender = ({ content, className }: MarkdownRenderProps) => {
  // Process custom alerts and code groups
  const processedContent = content
    // Alerts
    .replace(/:::(tip|hint)\s*\n([\s\S]*?)\n:::/g, (_, type, content) => `> TIP: ${content.trim()}`)
    .replace(/:::(important|warning)\s*\n([\s\S]*?)\n:::/g, (_, type, content) => `> WARNING: ${content.trim()}`)
    .replace(/:::(caution)\s*\n([\s\S]*?)\n:::/g, (_, type, content) => `> CAUTION: ${content.trim()}`)
    .replace(/:::(note|info)\s*\n([\s\S]*?)\n:::/g, (_, type, content) => `> NOTE: ${content.trim()}`)
    // Code Groups (simple version - you can enhance this further)
    .replace(/::: code-group\s*\n([\s\S]*?)\n:::/g, (_, content) => {
      // You can customize how to render code-group here
      // For now, just return the content as-is, wrapped in a div
      return `<div className="code-group">${content.trim()}</div>`;
    })
    // Also support double-colon format
    .replace(/::tip\s+([\s\S]*?)::/g, '> TIP: $1')
    .replace(/::important\s+([\s\S]*?)::/g, '> IMPORTANT: $1')
    .replace(/::warning\s+([\s\S]*?)::/g, '> WARNING: $1')
    .replace(/::caution\s+([\s\S]*?)::/g, '> CAUTION: $1')
    .replace(/::note\s+([\s\S]*?)::/g, '> NOTE: $1');

  return (
    <div className={`prose prose-invert max-w-none prose-headings:mb-3 prose-headings:mt-6 prose-p:my-3 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:bg-white/10 prose-code:p-1 prose-code:rounded-md prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-hr:my-6 prose-hr:border-white/10 ${className || ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-white/10 rounded-lg" {...props} />
            </div>
          ),
          thead: ({ ...props }) => (
            <thead className="bg-white/5" {...props} />
          ),
          tbody: ({ ...props }) => (
            <tbody className="divide-y divide-white/10" {...props} />
          ),
          tr: ({ ...props }) => (
            <tr className="border-b border-white/10 hover:bg-white/5" {...props} />
          ),
          th: ({ ...props }) => (
            <th className="py-3 px-4 text-left font-semibold text-white/90" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="py-3 px-4" {...props} />
          ),
          blockquote: BlockquoteComponent,
          // Example: Handle code-group as a div with a class
          div: ({ node, className, ...props }) => {
            if (className?.includes('code-group')) {
              return (
                <div className="my-4 border border-white/10 rounded-lg p-4 bg-black/30">
                  <div className="font-medium text-white/80 mb-2">Code Group:</div>
                  <div className="space-y-2">
                    {props.children}
                  </div>
                </div>
              );
            }
            return <div className={className} {...props} />;
          }
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};