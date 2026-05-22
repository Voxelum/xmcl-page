import React, { useState, useMemo, useEffect } from "react";
import {
  GithubLogo,
  ArrowSquareOut,
  Spinner,
  Warning,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useQuery } from "@tanstack/react-query";
import { DownloadHero } from "./DownloadHero";
import { PlatformCards } from "./PlatformCards";
import type { GitHubRelease, PlatformAssets } from './types';

// OS Detection function
const detectOS = (): "windows" | "macos" | "linux" => {
  if (typeof navigator === "undefined") return "windows";
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac")) return "macos";
  if (userAgent.includes("linux") || userAgent.includes("x11")) return "linux";

  return "windows";
};

// Main Component
const NewDownloadSection = () => {
  const { t } = useTranslation();
  const [detectedOS, setDetectedOS] = useState<"windows" | "macos" | "linux">("windows");

  // Detect OS on component mount
  useEffect(() => {
    setDetectedOS(detectOS());
  }, []);

  // Fetch releases with optimization
  const {
    data: releases,
    isLoading,
    error,
  } = useQuery<GitHubRelease[]>({
    queryKey: ["github-releases"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases",
        { headers: { Accept: "application/vnd.github.v3+json" } },
      );
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const latestRelease = releases?.[0];

  // Memoized asset filtering with optimization
  const platformAssets = useMemo((): PlatformAssets => {
    if (!latestRelease?.assets) {
      return {
        windows: { x64: [], app: [] },
        macos: { x64: [], arm64: [] },
        linux: { x64: [], arm64: [] },
      };
    }

    const filtered = latestRelease.assets.filter((asset) => {
      const name = asset.name.toLowerCase();
      return (
        !name.includes("sha256") &&
        !name.includes("blockmap") &&
        !name.includes(".sig") &&
        !name.includes(".txt") &&
        !name.includes(".yml") &&
        asset.size > 1024 * 1024
      );
    });


    return {
      windows: {
        x64: filtered.filter((a) => {
            const n = a.name.toLowerCase();
            return n.endsWith(".exe") || (n.endsWith(".zip") && !n.includes("mac") && !n.includes("linux")); 
        }),
        app: filtered.filter((a) => {
            const n = a.name.toLowerCase();
            return n.endsWith(".appinstaller") || n.endsWith(".appx");
        }),
      },
      macos: {
        x64: filtered.filter((a) => {
            const n = a.name.toLowerCase();
            return (
              (n.includes(".dmg") || n.includes(".pkg")) && !n.includes("arm64")
            );
          }),
        arm64: filtered
          .filter((a) => {
            const n = a.name.toLowerCase();
            return (
              (n.includes(".dmg") || n.includes(".pkg")) && n.includes("arm64")
            );
          }),
      },
      linux: {
        x64: filtered
          .filter((a) => {
            const n = a.name.toLowerCase();
            return (
              (n.includes(".deb") ||
                n.includes(".rpm") ||
                n.includes(".appimage") ||
                n.includes(".tar.xz")) &&
              !n.includes("arm64")
            );
          }),
        arm64: filtered
          .filter((a) => {
            const n = a.name.toLowerCase();
            return (
              (n.includes(".deb") ||
                n.includes(".rpm") ||
                n.includes(".appimage") ||
                n.includes(".tar.xz")) &&
              n.includes("arm64")
            );
          }),
      },
    };
  }, [latestRelease]);

  const handleDownload = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
      return;
    }
    
    // Auto-detect download link logic
    let downloadUrl = '';
    
    if (detectedOS === 'windows') {
      downloadUrl = platformAssets.windows.x64[0]?.browser_download_url;
    } else if (detectedOS === 'macos') {
      // Default to arm64 if available as it works on both (with rosetta) or just prioritize universal
      // But typically we want the specific one. For auto-button we might need better detection or just pick one.
      // Let's pick arm64 if on mac, assuming modern macs, or x64 if fail safe. 
      // Ideally we check arch, but userAgent doesn't always give it reliably.
      downloadUrl = platformAssets.macos.arm64[0]?.browser_download_url || platformAssets.macos.x64[0]?.browser_download_url;
    } else if (detectedOS === 'linux') {
      downloadUrl = platformAssets.linux.x64.find(a => a.name.includes('.appimage'))?.browser_download_url || platformAssets.linux.x64[0]?.browser_download_url;
    }

    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    } else {
        // Fallback or scroll to options
       const element = document.getElementById('platform-cards');
       element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 md:pt-20">
        <Spinner className="w-10 h-10 md:w-12 md:h-12 animate-spin text-blue-500 mb-4" />
        <p className="text-slate-400 text-sm md:text-base">{t("downloadMessages.loadingReleases") || "Loading releases..."}</p>
      </section>
    );
  }

  // Error state
  if (error || !latestRelease) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 md:pt-20 px-4 text-center">
        <div className="p-6 md:p-8 rounded-3xl bg-red-500/10 border border-red-500/20 max-w-md w-full">
            <Warning className="w-10 h-10 md:w-12 md:h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t("downloadMessages.errorTitle") || "Unable to load releases"}</h3>
            <p className="text-slate-400 mb-6">{t("downloadMessages.errorDescription") || "Please try again later or visit our GitHub."}</p>
            <Button
                onClick={() => window.open("https://github.com/Voxelum/x-minecraft-launcher/releases", "_blank")}
                className="bg-red-500 hover:bg-red-600 text-white"
            >
                <GithubLogo className="w-4 h-4 mr-2" />
                {t("downloadMessages.openGitHub") || "Open GitHub"}
            </Button>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <DownloadHero 
        latestRelease={latestRelease} 
        detectedOS={detectedOS}
        onDownload={() => handleDownload()}
      />
      
      <div id="platform-cards">
        <PlatformCards 
            platformAssets={platformAssets}
            onDownload={(url) => handleDownload(url)}
        />
      </div>

       {/* Footer / All Releases Link */}
       <div className="py-12 md:py-20 text-center border-t border-slate-900">
         <p className="text-slate-400 mb-4 md:mb-6 text-sm md:text-base">{t('downloadMessages.lookingForOlder') || "Looking for older versions?"}</p>
         <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <Button
              variant="outline"
              onClick={() => window.open(latestRelease.html_url, "_blank")}
              className="border-slate-800 hover:bg-slate-900 text-slate-300"
            >
              <ArrowSquareOut className="w-4 h-4 mr-2" />
              {t("downloadMessages.releaseNotes")}
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com/Voxelum/x-minecraft-launcher/releases", "_blank")}
              className="border-slate-800 hover:bg-slate-900 text-slate-300"
            >
              <GithubLogo className="w-4 h-4 mr-2" />
              {t("downloadMessages.allReleases")}
            </Button>
         </div>
       </div>
    </div>
  );
};

export default NewDownloadSection;
