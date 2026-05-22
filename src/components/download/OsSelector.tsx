import React from 'react';
import { toast } from 'sonner';
import { useTranslation } from '@/hooks/useTranslation';

interface OSSelectorProps {
  selectedOS: string;
  onSelectOS: (os: string) => void;
}

const OSSelector: React.FC<OSSelectorProps> = ({ selectedOS, onSelectOS }) => {
  const { t } = useTranslation();

  const osOptions = [
    { id: 'windows', name: 'Windows', icon: '🪟' },
    { id: 'macos', name: 'macOS', icon: '🍎' },
    { id: 'linux', name: 'Linux', icon: '🐧' }
  ];

  const handleOSSelect = (osId: string, osName: string) => {
    onSelectOS(osId);
    toast.success(`${t('osSwitch.switchedTo')} ${osName}`);
  };

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-2 shadow-lg">
        <div className="flex gap-2">
          {osOptions.map((os) => (
            <button
              key={os.id}
              onClick={() => handleOSSelect(os.id, os.name)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedOS === os.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span>{os.icon}</span>
              {os.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { OSSelector };