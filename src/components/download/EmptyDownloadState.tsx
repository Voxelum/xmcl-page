
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowSquareOut } from '@phosphor-icons/react';
import { useTranslation } from '@/hooks/useTranslation';

interface EmptyDownloadStateProps {
  latestRelease: any;
  selectedOS: string;
}

export const EmptyDownloadState = ({ latestRelease, selectedOS }: EmptyDownloadStateProps) => {
  const { t } = useTranslation();
  return (
    <div className="col-span-full">
      <Card className="p-8 text-center bg-white/5 border border-white/10 text-white">
        <Package className="w-12 h-12 mx-auto mb-4 text-slate-400" />
        <p className="text-slate-300 mb-4">
          {latestRelease ?
            `${t('downloadMessages.noVersionsAvailable')} ${selectedOS}` :
            t('downloadMessages.loadingReleases')
          }
        </p>
        {latestRelease && (
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
            onClick={() => window.open(latestRelease?.html_url, '_blank')}
          >
            {t('downloadMessages.viewAllReleases')}
            <ArrowSquareOut className="w-4 h-4 ml-2" />
          </Button>
        )}
      </Card>
    </div>
  );
};
