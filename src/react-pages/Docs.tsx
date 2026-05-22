

import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowSquareOut, Code, Book, Layers } from "@phosphor-icons/react";
import { useTranslation } from "@/hooks/useTranslation";
import { AppShell } from '@/components/AppShell';

const DocsContent = () => {
  const { t } = useTranslation();
  
  const docSections = [
    {
      title: t('docs.sections.coreApi.title'),
      description: t('docs.sections.coreApi.description'),
      icon: <Code weight="fill" className="w-8 h-8" />,
      color: "text-[#ea4c3c]",
      url: "https://xmcl.app/en/core/"
    },
    {
      title: t('docs.sections.launcherCore.title'),
      description: t('docs.sections.launcherCore.description'),
      icon: <Layers weight="fill" className="w-8 h-8" />,
      color: "text-[#ea4c3c]",
      url: "https://xmcl.app/en/core/launcher"
    },
    {
      title: t('docs.sections.modManagement.title'),
      description: t('docs.sections.modManagement.description'),
      icon: <Book weight="fill" className="w-8 h-8" />,
      color: "text-[#ea4c3c]",
      url: "https://xmcl.app/en/core/mod"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-top-4 duration-500">
            {t('docs.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('docs.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {docSections.map((section, index) => (
            <Card key={index} className="p-6 bg-card border border-border hover:border-[#ea4c3c] transition-all duration-300 hover:scale-105">
              <div className={`${section.color} mb-4`}>
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h3>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <Button 
                variant="outline" 
                className="w-full bg-background border border-border text-foreground hover:bg-[#ea4c3c] hover:border-[#ea4c3c] hover:text-white transition-colors"
                onClick={() => window.open(section.url, '_blank')}
              >
                {t('docs.openDocumentation')}
                <ArrowSquareOut className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border border-border text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            {t('docs.fullDocumentation')}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('docs.fullDocumentationDescription')}
          </p>
          <Button 
            size="lg"
            className="bg-[#ea4c3c] hover:bg-[#d63e2c] text-white border-0 shadow-none"
            onClick={() => window.open('https://xmcl.app/en/core/', '_blank')}
          >
            {t('docs.goToDocumentation')}
            <ArrowSquareOut className="w-5 h-5 ml-2" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default function Docs() {
  return (
    <AppShell>
      <DocsContent />
    </AppShell>
  );
}
