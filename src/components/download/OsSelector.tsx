import React from 'react';
import { toast } from 'sonner';
import { useTranslation } from '@/hooks/useTranslation';
import { Laptop, AppleLogo, LinuxLogo } from '@phosphor-icons/react';

interface OSSelectorProps {
  selectedOS: string;
  onSelectOS: (os: string) => void;
}

const OSSelector: React.FC<OSSelectorProps> = ({ selectedOS, onSelectOS }) => {
  const { t } = useTranslation();

  const osOptions = [
    { id: 'windows', name: 'Windows', icon: <Laptop className="w-5 h-5" /> },
    { id: 'macos', name: 'macOS', icon: <AppleLogo className="w-5 h-5" /> },
    { id: 'linux', name: 'Linux', icon: <LinuxLogo className="w-5 h-5" /> }
  ];

  const handleOSSelect = (osId: string, osName: string) => {
    onSelectOS(osId);
    toast.success(`${t('osSwitch.switchedTo')} ${osName}`);
  };

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl p-2 shadow-none">
        <div className="flex gap-2">
          {osOptions.map((os) => (
            <button
              key={os.id}
              onClick={() => handleOSSelect(os.id, os.name)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedOS === os.id
                  ? 'bg-[#ea4c3c] text-white'
                  : 'text-slate-400 hover:bg-[#121212] hover:text-white'
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