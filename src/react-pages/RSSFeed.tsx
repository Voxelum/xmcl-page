import { RssSimple, DownloadSimple, FileCode } from '@phosphor-icons/react';
import { useTranslation } from '@/contexts/TranslationContext';
import { AppShell } from '@/components/AppShell';

/**
 * Component that generates and serves an RSS feed
 * This component now renders a UI for viewing the RSS feed online
 * and also provides a download option
 */
const RSSFeedContent = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="flex items-center gap-2 mb-2">
          <RssSimple size={24} className="text-orange-400" />
          <h1 className="text-3xl font-bold">XMCL Blog RSS Feed</h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Subscribe to our RSS feed to stay updated with the latest blog posts
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/rss.xml"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <DownloadSimple size={18} />
            Download RSS Feed
          </a>

          <a
            href="/guide-rss.xml"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <FileCode size={18} />
            Download Guide RSS Feed
          </a>
        </div>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">How to Subscribe</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Add one of these URLs to your RSS reader to subscribe:
        </p>
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-900 p-3 rounded flex items-center justify-between">
            <code className="text-sm">Blog RSS: {typeof window !== 'undefined' ? window.location.origin : ''}/rss.xml</code>
          </div>
          <div className="bg-white dark:bg-slate-900 p-3 rounded flex items-center justify-between">
            <code className="text-sm">Guide RSS: {typeof window !== 'undefined' ? window.location.origin : ''}/guide-rss.xml</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RSSFeed() {
  return (
    <AppShell>
      <RSSFeedContent />
    </AppShell>
  );
}