
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { DownloadOption } from './types';

export function useDownloadActions() {
  const { toast } = useToast();
  const [showAllOptions, setShowAllOptions] = useState(false);
  
  const handleDownloadClick = useCallback((option: DownloadOption) => {
    // Show package information toast first
    if (option.description) {
      toast({
        title: `${option.title} Information`,
        description: option.description,
        variant: "default",
        duration: 5000
      });
    }
    
    // Then handle the download after a short delay
    setTimeout(() => {
      if (option.isComingSoon) {
        if (option.title === "Linux Flatpak") {
          window.open(option.link, '_blank');
        } else {
          toast({
            title: "Coming Soon",
            description: "This download option is not yet available.",
            variant: "default"
          });
        }
      } else {
        window.open(option.link, '_blank');
        
        toast({
          title: "Download Started",
          description: `${option.title} is downloading now.`,
          variant: "default"
        });
      }
    }, 500);
  }, [toast]);

  return {
    showAllOptions,
    setShowAllOptions,
    handleDownloadClick
  };
}
