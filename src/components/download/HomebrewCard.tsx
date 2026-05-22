import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from '@phosphor-icons/react';
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
      <Card className="p-6 hover:shadow-lg transition-all duration-300 border-orange-200 dark:border-orange-800">
        <div className="text-center">
          <div className="text-4xl mb-4">🍺</div>
          <h3 className="text-xl font-semibold mb-2">Homebrew</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {t('downloadSection.installCommands')}
          </p>
          <Button
            onClick={handleBrewCopy}
            variant="outline"
            className="w-full mb-4"
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