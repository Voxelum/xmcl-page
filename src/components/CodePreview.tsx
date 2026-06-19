
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Download, ArrowsOut, ArrowsIn, Code, FileText } from '@phosphor-icons/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  language: string;
  filename?: string;
}

export function CodePreview({ isOpen, onClose, code, language, filename }: CodePreviewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close on Escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen, onClose]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || `code.${language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced backdrop with maximum z-index */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            style={{ zIndex: 999999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Code preview modal with absolute maximum z-index */}
          <motion.div
            className={`fixed border border-border shadow-none overflow-hidden bg-card text-foreground ${
              isFullscreen 
                ? 'inset-2' 
                : 'top-[5%] left-[5%] right-[5%] bottom-[5%] max-w-7xl mx-auto rounded-2xl'
            }`}
            style={{ 
              zIndex: 9999999,
              borderRadius: isFullscreen ? '0' : '1rem'
            }}
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Premium Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-card">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 bg-primary/10 rounded-xl border border-primary/20"
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <Code className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-foreground font-bold text-xl">
                    {filename || 'Предпросмотр кода'}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-primary text-sm font-medium">
                      {language.toUpperCase()}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {code.split('\n').length} строк
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {new Blob([code]).size} байт
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Copy button */}
                <motion.button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-muted border border-border rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy className={`w-4 h-4 ${copied ? 'text-green-400' : 'text-muted-foreground group-hover:text-foreground'}`} />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    {copied ? 'Скопировано!' : 'Копировать'}
                  </span>
                </motion.button>
                
                {/* Download button */}
                <motion.button
                  onClick={downloadCode}
                  className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-muted border border-border rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    Скачать
                  </span>
                </motion.button>
                
                {/* Fullscreen toggle */}
                <motion.button
                  onClick={toggleFullscreen}
                  className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-muted border border-border rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isFullscreen ? (
                    <ArrowsIn className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                  ) : (
                    <ArrowsOut className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                  )}
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    {isFullscreen ? 'Выйти' : 'Полный экран'}
                  </span>
                </motion.button>
                
                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 border-0 text-primary-foreground rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">
                    Закрыть
                  </span>
                </motion.button>
              </div>
            </div>
            
            {/* Code content with enhanced styling */}
            <div className="flex-1 overflow-hidden h-full">
              <div className="h-full overflow-auto custom-scrollbar bg-background text-foreground">
                <SyntaxHighlighter
                  language={language}
                  style={tomorrow}
                  className="!bg-transparent !m-0 text-sm h-full"
                  customStyle={{
                    background: 'transparent',
                    padding: '2rem',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    minHeight: '100%',
                  }}
                  showLineNumbers
                  lineNumberStyle={{
                    color: 'var(--muted-foreground)',
                    borderRight: '1px solid var(--border)',
                    paddingRight: '1.5rem',
                    marginRight: '1.5rem',
                    backgroundColor: 'transparent',
                    userSelect: 'none',
                    opacity: 0.5,
                  }}
                  wrapLines
                  wrapLongLines
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
            
            {/* Enhanced success notification */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  className="absolute top-24 right-6 bg-green-600 border border-green-500 text-white px-6 py-3 rounded-xl shadow-none"
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 100, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <Copy className="w-4 h-4" />
                    <span className="font-medium">Код скопирован в буфер обмена!</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
