
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowSquareOut } from '@phosphor-icons/react';
import { useTranslation } from '@/hooks/useTranslation';

interface ReleaseInfoProps {
  latestRelease: any;
}

export const ReleaseInfo = ({ latestRelease }: ReleaseInfoProps) => {
  const { t } = useTranslation();
  if (!latestRelease) return null;

  return (
    <div className="mt-8 pt-6 border-t border-white/20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-slate-300 text-sm">
            {t('downloadSection.version')}: {latestRelease.tag_name} • {t('downloadMessages.releasedOn')}: {new Date(latestRelease.published_at).toLocaleDateString()}
          </p>
        </div>
        <Button 
          variant="ghost"
          onClick={() => window.open(latestRelease.html_url, '_blank')}
          className="text-blue-300 hover:text-blue-200 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
        >
          {t('downloadSection.releaseNotes')}
          <ArrowSquareOut className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
