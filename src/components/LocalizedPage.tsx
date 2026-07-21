import React from "react";
import { PageLocaleContext } from "@/contexts/PageLocaleContext";
import Blog, { type BlogConfig } from "@/react-pages/Blog";
import Contact from "@/react-pages/Contact";
import Docs from "@/react-pages/Docs";
import Download from "@/react-pages/Download";
import Features from "@/react-pages/Features";
import Guide, { type GuideConfig } from "@/react-pages/Guide";
import Information from "@/react-pages/Information";
import ModernChangelog from "@/react-pages/ModernChangelog";
import ModernIssues from "@/react-pages/ModernIssues";
import Privacy from "@/react-pages/Privacy";
import RSSFeed from "@/react-pages/RSSFeed";
import Testing from "@/react-pages/Testing";
import Index from "@/react-pages/Index";

export type LocalizedPageName =
  | "home"
  | "blog"
  | "changelog"
  | "contact"
  | "docs"
  | "download"
  | "features"
  | "guide"
  | "information"
  | "issues"
  | "privacy"
  | "rss"
  | "testing";

interface LocalizedPageProps {
  page: LocalizedPageName;
  locale: SupportedLocale;
  blogConfig?: BlogConfig;
  guideConfig?: GuideConfig;
}

export function LocalizedPage({
  page,
  locale,
  blogConfig,
  guideConfig,
}: LocalizedPageProps) {
  let content: React.ReactNode;

  switch (page) {
    case "home":
      content = <Index />;
      break;
    case "blog":
      content = <Blog initialConfig={blogConfig} />;
      break;
    case "changelog":
      content = <ModernChangelog />;
      break;
    case "contact":
      content = <Contact />;
      break;
    case "docs":
      content = <Docs />;
      break;
    case "download":
      content = <Download />;
      break;
    case "features":
      content = <Features />;
      break;
    case "guide":
      content = <Guide initialConfig={guideConfig} />;
      break;
    case "information":
      content = <Information />;
      break;
    case "issues":
      content = <ModernIssues />;
      break;
    case "privacy":
      content = <Privacy />;
      break;
    case "rss":
      content = <RSSFeed />;
      break;
    case "testing":
      content = <Testing />;
      break;
  }

  return (
    <PageLocaleContext.Provider value={locale}>
      {content}
    </PageLocaleContext.Provider>
  );
}
