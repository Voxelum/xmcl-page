import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Code, Folder, File, ArrowSquareOut } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeViewer = ({ isOpen, onClose }: CodeViewerProps) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const { data: repoData } = useQuery({
    queryKey: ['repoContents'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/Voxelum/x-minecraft-launcher/contents');
      if (!response.ok) throw new Error('Failed to fetch repository contents');
      return response.json();
    },
    enabled: isOpen
  });

  const fetchFileContent = async (path: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/repos/Voxelum/x-minecraft-launcher/contents/${path}`);
      const data = await response.json();
      
      if (data.content) {
        const content = atob(data.content);
        setFileContent(content);
        setSelectedFile(path);
      }
    } catch (error) {
      console.error('Error fetching file content:', error);
      setFileContent('Error loading file content');
    } finally {
      setLoading(false);
    }
  };

  const getLanguage = (filename: string | null) => {
    if (!filename) return 'text';
    const ext = filename.split('.').pop()?.toLowerCase();
    if (ext === 'ts' || ext === 'tsx') return 'typescript';
    if (ext === 'js' || ext === 'jsx') return 'javascript';
    if (ext === 'json') return 'json';
    if (ext === 'md') return 'markdown';
    return 'text';
  };

  const renderFileTree = (items: any[]) => {
    return items
      .filter(item => item.type === 'file' && (item.name.endsWith('.ts') || item.name.endsWith('.js') || item.name.endsWith('.json') || item.name.endsWith('.md')))
      .slice(0, 20)
      .map((item) => (
        <div
          key={item.path}
          className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors ${
            selectedFile === item.path ? 'bg-accent text-accent-foreground font-semibold' : 'text-muted-foreground'
          }`}
          onClick={() => fetchFileContent(item.path)}
        >
          <File className="w-4 h-4 text-primary shrink-0" />
          <span className="text-sm truncate">{item.name}</span>
        </div>
      ));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[80vh] bg-card border-border overflow-hidden flex shadow-none rounded-2xl relative">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 border-b border-border flex items-center justify-between bg-card z-10">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold text-foreground">XMCL Code Viewer</span>
            <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 rounded-lg">
              Live Repository
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher', '_blank')}
              className="text-muted-foreground hover:text-foreground border-border hover:bg-accent bg-card shadow-none"
            >
              <ArrowSquareOut className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full mt-16">
          {/* File Tree */}
          <div className="w-1/3 border-r border-border p-4 overflow-y-auto bg-card">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
              <Folder className="w-4 h-4 text-primary" />
              Repository Files
            </h3>
            <div className="space-y-1">
              {repoData ? renderFileTree(repoData) : (
                <div className="text-muted-foreground text-sm">Loading files...</div>
              )}
            </div>
          </div>

          {/* Code Display */}
          <div className="flex-1 p-6 overflow-y-auto bg-background/50 flex flex-col">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : selectedFile ? (
              <div className="flex flex-col h-full">
                <div className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span>{selectedFile}</span>
                </div>
                <div className="flex-1 overflow-auto rounded-xl border border-border bg-card">
                  <SyntaxHighlighter
                    language={getLanguage(selectedFile)}
                    style={tomorrow}
                    className="!bg-transparent !m-0 text-sm h-full"
                    customStyle={{
                      background: 'transparent',
                      padding: '1.5rem',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      minHeight: '100%',
                    }}
                    showLineNumbers
                    lineNumberStyle={{
                      color: 'var(--muted-foreground)',
                      borderRight: '1px solid var(--border)',
                      paddingRight: '1rem',
                      marginRight: '1rem',
                      backgroundColor: 'transparent',
                      userSelect: 'none',
                      opacity: 0.5,
                    }}
                    wrapLines
                    wrapLongLines
                  >
                    {fileContent}
                  </SyntaxHighlighter>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-primary opacity-50 animate-pulse" />
                  <p className="text-lg font-medium text-foreground mb-1">XMCL Source Code Explorer</p>
                  <p className="text-sm">Выберите файл слева для интерактивного просмотра</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CodeViewer;
