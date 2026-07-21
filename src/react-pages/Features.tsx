import React from 'react';
import { PageTransition } from '@/components/PageTransition';
import { FeaturesSection } from '@/components/FeaturesSection';
import { AppShell } from '@/components/AppShell';

const FeaturesContent = () => {
  return (
    <PageTransition>
      <FeaturesSection headingLevel="h1" />
    </PageTransition>
  );
};

export default function Features() {
  return (
    <AppShell>
      <FeaturesContent />
    </AppShell>
  );
}
