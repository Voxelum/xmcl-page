import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { useTranslation } from '@/hooks/useTranslation';

const HomebrewCard: React.FC = () => {
  const { t } = useTranslation();
  const [copiedBrew, setCopiedBrew] = useState(false);

  const handleBrewCopy = () => {
    const commands = `brew tap voxelum/brew
brew install --cask xmcl`;
    navigator.clipboard.writeText(commands);
    setCopiedBrew(true);
    toast.success(t('downloadMessages.brewCommands'));
    setTimeout(() => setCopiedBrew(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="p-6 bg-card border border-border hover:border-[#ea4c3c] hover:shadow-none transition-all duration-300 rounded-2xl">
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mx-auto mb-6 text-[#ea4c3c]">
            <Terminal className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Homebrew</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            {t('downloadSection.installCommands')}
          </p>
          <Button
            onClick={handleBrewCopy}
            variant="outline"
            className="w-full border-border bg-background hover:bg-accent text-foreground hover:border-[#ea4c3c] transition-all duration-300 rounded-xl"
          >
            {copiedBrew ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Commands
              </>
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export { HomebrewCard };