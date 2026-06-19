
import React from 'react';
import { AppShell } from '@/components/AppShell';

const PrivacyContent: React.FC = () => {
  return (
    <AppShell>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Last updated: 2024</p>
          <p>This is the privacy policy for X Minecraft Launcher (XMCL).</p>
        </div>
      </div>
    </AppShell>
  );
};

export default PrivacyContent;

