import React from 'react';
import { PageTransition } from '@/components/PageTransition';
import NewDownloadSection from '@/components/download/NewDownloadSection';
import { AppShell } from '@/components/AppShell';

const DownloadContent = () => {
  return (
    <PageTransition>
      <NewDownloadSection />
    </PageTransition>
  );
};

export default function Download() {
  return (
    <AppShell>
      <DownloadContent />
    </AppShell>
  );
}
