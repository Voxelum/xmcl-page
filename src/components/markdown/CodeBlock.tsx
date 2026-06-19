import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy, Check } from '@phosphor-icons/react';

interface CodeBlockProps {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ children, language = '', showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  // Detect language from className if provided in markdown code blocks
  const detectedLanguage = language || 'text';
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="p-2 rounded-md bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-colors"
          aria-label={copied ? 'Copied!' : 'Copy code'}
          title={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      
      <div className="overflow-hidden rounded-lg">
        {language && (
          <div className="bg-gray-800 text-gray-400 text-xs px-4 py-1 border-b border-gray-700">
            {detectedLanguage}
          </div>
        )}
        
        <SyntaxHighlighter
          language={detectedLanguage}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          wrapLines={true}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.9rem',
            backgroundColor: '#1e1e1e',
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}