
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Code, Folder, File, ArrowSquareOut } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';

interface FileTree {
  name: string;
  path: string;
  type: 'file' | 'dir';
  children?: FileTree[];
}

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

  const renderFileTree = (items: any[]) => {
    return items
      .filter(item => item.type === 'file' && (item.name.endsWith('.ts') || item.name.endsWith('.js') || item.name.endsWith('.json') || item.name.endsWith('.md')))
      .slice(0, 20)
      .map((item) => (
        <div
          key={item.path}
          className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-700 ${
            selectedFile === item.path ? 'bg-gray-700' : ''
          }`}
          onClick={() => fetchFileContent(item.path)}
        >
          <File className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">{item.name}</span>
        </div>
      ));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[80vh] bg-gray-900 border-gray-700 overflow-hidden flex">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 border-b border-gray-700 flex items-center justify-between bg-gray-900 z-10">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold text-white">XMCL Code Viewer</span>
            <Badge variant="secondary" className="bg-green-600/20 text-green-400">
              Live Repository
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://github.com/Voxelum/x-minecraft-launcher', '_blank')}
              className="text-gray-400 hover:text-white border-gray-600"
            >
              <ArrowSquareOut className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full mt-16">
          {/* File Tree */}
          <div className="w-1/3 border-r border-gray-700 p-4 overflow-y-auto">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
              <Folder className="w-4 h-4" />
              Repository Files
            </h3>
            <div className="space-y-1">
              {repoData ? renderFileTree(repoData) : (
                <div className="text-gray-500 text-sm">Loading files...</div>
              )}
            </div>
          </div>

          {/* Code Display */}
          <div className="flex-1 p-4 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full"></div>
              </div>
            ) : selectedFile ? (
              <div>
                <div className="mb-4 text-sm text-gray-400">
                  <Code className="w-4 h-4 inline mr-2" />
                  {selectedFile}
                </div>
                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap">
                  {fileContent}
                </pre>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Выберите файл для просмотра</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
