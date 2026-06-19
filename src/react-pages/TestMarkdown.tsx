import React from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { PageTransition } from '@/components/PageTransition';

const TestMarkdown = () => {
  const testContent = ``;


  return (
    <PageTransition>
      <div className="container mx-auto py-10 px-4">
        <MarkdownRenderer content={testContent} />
      </div>
    </PageTransition>
  );
};

export default TestMarkdown;