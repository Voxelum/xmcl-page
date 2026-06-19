import React, { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  GithubLogo,
  ArrowSquareOut,
  Spinner,
  Laptop,
  AppleLogo,
  LinuxLogo,
  DownloadSimple,
  Copy,
  Check,
  Terminal,
  Cpu,
  Archive,
  Info,
  Calendar,
  Sparkle,
  HardDrive
} from "@phosphor-icons/react";
import type { GitHubRelease, PlatformAssets, GitHubAsset } from './types';

// OS Detection helper
const detectOS = (): "windows" | "macos" | "linux" => {
  if (typeof navigator === "undefined") return "windows";
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac")) return "macos";
  if (userAgent.includes("linux") || userAgent.includes("x11")) return "linux";

  return "windows";
};

// Format file size
const formatSize = (bytes: number) => {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// Format download counts
const formatDownloads = (num: number) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return `${num}`;
};

// Copyable command line component
const CommandLine: React.FC<{ command: string }> = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Command copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-3 p-3 bg-background border border-border/80 rounded-xl font-mono text-xs sm:text-sm text-foreground/90 overflow-x-auto max-w-full">
      <span className="whitespace-nowrap select-all pr-2">{command}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleCopy}
        className="h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground shrink-0 rounded-lg transition-all"
        title="Copy command"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  );
};

const NewDownloadSection = () => {
  const { t, locale } = useTranslation();
  const [detectedOS, setDetectedOS] = useState<"windows" | "macos" | "linux">("windows");
  const [activeTab, setActiveTab] = useState<"windows" | "macos" | "linux" | "managers">("windows");

  // Detect OS on mount and set active tab accordingly
  useEffect(() => {
    const os = detectOS();
    setDetectedOS(os);
    setActiveTab(os);
  }, []);

  // Fetch GitHub releases
  const {
    data: releases,
    isLoading,
    error,
  } = useQuery<GitHubRelease[]>({
    queryKey: ["github-releases"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/repos/Voxelum/x-minecraft-launcher/releases",
        { headers: { Accept: "application/vnd.github.v3+json" } }
      );
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  // Find the latest release that actually has complete assets uploaded (exe, dmg/pkg, and appimage/deb/rpm)
  const latestRelease = useMemo(() => {
    if (!releases || releases.length === 0) return undefined;
    
    const completeRelease = releases.find(r => {
      if (!r.assets || r.assets.length === 0) return false;
      
      const hasExe = r.assets.some(a => a.name.toLowerCase().endsWith(".exe"));
      const hasMac = r.assets.some(a => {
        const n = a.name.toLowerCase();
        return n.endsWith(".dmg") || n.endsWith(".pkg");
      });
      const hasLinux = r.assets.some(a => {
        const n = a.name.toLowerCase();
        return n.endsWith(".appimage") || n.endsWith(".deb") || n.endsWith(".rpm");
      });
      
      return hasExe && hasMac && hasLinux;
    });

    return completeRelease || releases[0];
  }, [releases]);

  // Organize platform assets
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
          return (n.includes(".dmg") || n.includes(".pkg")) && !n.includes("arm64");
        }),
        arm64: filtered.filter((a) => {
          const n = a.name.toLowerCase();
          return (n.includes(".dmg") || n.includes(".pkg")) && n.includes("arm64");
        }),
      },
      linux: {
        x64: filtered.filter((a) => {
          const n = a.name.toLowerCase();
          return (
            (n.includes(".deb") ||
              n.includes(".rpm") ||
              n.includes(".appimage") ||
              n.includes(".tar.xz")) &&
            !n.includes("arm64")
          );
        }),
        arm64: filtered.filter((a) => {
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

  // Extract recommended and alternative download items for active tab
  const activeDownloads = useMemo(() => {
    if (!latestRelease) return { primary: null, alternatives: [] };

    if (activeTab === "windows") {
      const installer = platformAssets.windows.x64.find(a => a.name.toLowerCase().endsWith(".exe"));
      const portable = platformAssets.windows.x64.find(a => a.name.toLowerCase().endsWith(".zip"));
      const appx = platformAssets.windows.app.find(a => a.name.toLowerCase().endsWith(".appx"));

      const alternatives = [];
      if (portable) {
        alternatives.push({
          asset: portable,
          label: "Portable Version (.zip) - x64 (64-bit)",
          desc: "Extract and run without installation"
        });
      }
      
      // Direct link to Azure appinstaller
      alternatives.push({
        url: "https://xmcl.blob.core.windows.net/releases/xmcl.appinstaller",
        label: "Windows App Installer (.appinstaller)",
        desc: "Installs and updates automatically"
      });

      if (appx) {
        alternatives.push({
          asset: appx,
          label: "Windows App Package (.appx) - x64 (64-bit)",
          desc: "Alternative offline package for Windows"
        });
      }

      return {
        primary: installer ? {
          asset: installer,
          label: "Installer (.exe)",
          desc: "Recommended for Windows 10 & 11"
        } : null,
        alternatives
      };
    }

    if (activeTab === "macos") {
      const armDmg = platformAssets.macos.arm64.find(a => a.name.toLowerCase().endsWith(".dmg"));
      const armPkg = platformAssets.macos.arm64.find(a => a.name.toLowerCase().endsWith(".pkg"));
      const intelDmg = platformAssets.macos.x64.find(a => a.name.toLowerCase().endsWith(".dmg"));
      const intelPkg = platformAssets.macos.x64.find(a => a.name.toLowerCase().endsWith(".pkg"));

      // Default primary is ARM DMG for Apple Silicon, fallback to Intel
      const primaryAsset = armDmg || intelDmg;
      const primaryLabel = armDmg ? "Apple Silicon (.dmg)" : "Intel Chip (.dmg)";
      const primaryDesc = armDmg ? "Recommended for M1 / M2 / M3 Apple Macs" : "For older Intel-based Macs";

      const alternatives = [];
      if (armDmg && armPkg) {
        alternatives.push({
          asset: armPkg,
          label: "Apple Silicon Installer (.pkg)",
          desc: "Alternative installer package for Apple Silicon"
        });
      }
      if (primaryAsset === armDmg && intelDmg) {
        alternatives.push({
          asset: intelDmg,
          label: "Intel Installer (.dmg)",
          desc: "Installer for older Intel Macs"
        });
      }
      if (intelPkg) {
        alternatives.push({
          asset: intelPkg,
          label: "Intel Installer Package (.pkg)",
          desc: "Alternative installer package for Intel Macs"
        });
      }

      return {
        primary: primaryAsset ? {
          asset: primaryAsset,
          label: primaryLabel,
          desc: primaryDesc
        } : null,
        alternatives
      };
    }

    if (activeTab === "linux") {
      const appImage = platformAssets.linux.x64.find(a => a.name.toLowerCase().endsWith(".appimage"));
      const deb = platformAssets.linux.x64.find(a => a.name.toLowerCase().endsWith(".deb"));
      const rpm = platformAssets.linux.x64.find(a => a.name.toLowerCase().endsWith(".rpm"));
      const tar = platformAssets.linux.x64.find(a => a.name.toLowerCase().endsWith(".tar.xz"));
      const debArm = platformAssets.linux.arm64.find(a => a.name.toLowerCase().endsWith(".deb"));
      const appImageArm = platformAssets.linux.arm64.find(a => a.name.toLowerCase().endsWith(".appimage"));

      const alternatives = [];
      if (deb) {
        alternatives.push({
          asset: deb,
          label: "Debian / Ubuntu Package (.deb)",
          desc: "For Debian, Ubuntu, Linux Mint (x64)"
        });
      }
      if (rpm) {
        alternatives.push({
          asset: rpm,
          label: "RedHat / Fedora Package (.rpm)",
          desc: "For Fedora, RHEL, openSUSE (x64)"
        });
      }
      if (tar) {
        alternatives.push({
          asset: tar,
          label: "Tarball Archive (.tar.xz)",
          desc: "Extract and run anywhere (x64)"
        });
      }
      
      // Add Arch User Repository (AUR)
      alternatives.push({
        url: "https://aur.archlinux.org/packages/xmcl-launcher",
        label: "Arch User Repository (AUR)",
        desc: "Arch Linux AUR package: xmcl-launcher"
      });

      if (debArm) {
        alternatives.push({
          asset: debArm,
          label: "Debian ARM64 Package (.deb)",
          desc: "For Ubuntu / Debian on ARM64 single-board computers"
        });
      }
      if (appImageArm) {
        alternatives.push({
          asset: appImageArm,
          label: "AppImage ARM64",
          desc: "Universal package for Linux ARM64"
        });
      }

      return {
        primary: appImage ? {
          asset: appImage,
          label: "AppImage (.AppImage)",
          desc: "Universal Linux format - double click to run (x64)"
        } : null,
        alternatives
      };
    }

    return { primary: null, alternatives: [] };
  }, [activeTab, platformAssets, latestRelease]);

  const handleDownload = (url: string) => {
    window.open(url, "_blank");
  };

  // Loading spinner
  if (isLoading) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <Spinner className="w-12 h-12 animate-spin text-[#ea4c3c] mb-4" />
        <p className="text-muted-foreground text-sm font-semibold">{t("downloadMessages.loadingReleases") || "Loading releases..."}</p>
      </section>
    );
  }

  // Error block
  if (error || !latestRelease) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
        <Card className="p-8 md:p-10 rounded-3xl bg-card border border-border max-w-xl w-full text-center shadow-2xl">
          <GithubLogo className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h3 className="text-2xl font-black text-foreground mb-3">GitHub API Rate Limit Exceeded</h3>
          <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
            It seems you have visited our website too frequently, triggering the GitHub API rate limit. If you want to download launcher files or view updates, please check our official GitHub page!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="border-border hover:bg-muted text-foreground"
            >
              Retry
            </Button>
            <Button
              onClick={() => window.open("https://github.com/Voxelum/x-minecraft-launcher/releases", "_blank")}
              className="bg-primary hover:bg-primary/95 text-white border-0 shadow-md shadow-primary/20 font-bold"
            >
              <GithubLogo className="w-4 h-4 mr-2" />
              GitHub Releases
            </Button>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-24 md:py-32">
      <main className="container mx-auto px-4 max-w-6xl">
        {/* Page Title & Version Badge */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 rounded-full bg-[#ea4c3c]/10 text-[#ea4c3c] border border-[#ea4c3c]/20 hover:bg-[#ea4c3c]/10 font-semibold text-xs md:text-sm">
              <Sparkle className="w-3.5 h-3.5 mr-2 fill-current" />
              {t("downloadMessages.version") || "Version"} {latestRelease.tag_name}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
              {t("downloadMessages.downloadTitle") || "Download XMCL"}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("downloadMessages.downloadDescription") || "Get the latest version of X Minecraft Launcher. Beautiful, customizable, and modular."}
            </p>
          </motion.div>
        </div>

        {/* Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card border border-border/80 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 min-h-[500px]"
        >
          {/* Left Sidebar Panel */}
          <div className="md:col-span-4 border-r border-border/80 bg-muted/10 p-5 md:p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-4 px-3">
                Select Platform
              </span>

              {/* OS Tabs buttons */}
              {([
                { id: "windows", label: "Windows", desc: "10, 11 (64-bit)", icon: Laptop },
                { id: "macos", label: "macOS", desc: "M1/M2/M3, Intel", icon: AppleLogo },
                { id: "linux", label: "Linux", desc: "AppImage, deb, rpm", icon: LinuxLogo },
                { id: "managers", label: "Package Managers", desc: "Brew, Scoop, AUR", icon: Terminal }
              ] as const).map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                const isUserOS = detectedOS === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between text-left p-3.5 rounded-2xl transition-all duration-200 cursor-pointer border
                      ${isSelected
                        ? "bg-[#ea4c3c]/10 border-[#ea4c3c]/30 text-[#ea4c3c]"
                        : "border-transparent text-foreground/80 hover:bg-muted/40 hover:text-foreground"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl border transition-colors
                        ${isSelected
                          ? "bg-[#ea4c3c] border-[#ea4c3c] text-white"
                          : "bg-background border-border text-muted-foreground"
                        }
                      `}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm tracking-wide">{tab.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{tab.desc}</div>
                      </div>
                    </div>

                    {isUserOS && !isSelected && (
                      <span className="text-[10px] font-bold bg-[#ea4c3c]/10 text-[#ea4c3c] px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Your OS
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Release date metadata */}
            <div className="p-4 bg-background/50 border border-border/60 rounded-2xl flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <div className="text-xs">
                <span className="text-muted-foreground block font-medium">{t("downloadMessages.releasedOn") || "Released on"}</span>
                <span className="font-bold text-foreground">
                  {new Date(latestRelease.published_at).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="flex-1"
              >
                {/* Header for Active Tab */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                      {activeTab === "windows" && "Windows Downloads"}
                      {activeTab === "macos" && "macOS Downloads"}
                      {activeTab === "linux" && "Linux Downloads"}
                      {activeTab === "managers" && "CLI & Package Managers"}
                    </h2>
                  </div>

                  {detectedOS === activeTab && (
                    <Badge className="bg-[#ea4c3c]/15 text-[#ea4c3c] border border-[#ea4c3c]/25 py-1 px-3 rounded-full font-bold text-xs uppercase tracking-wider">
                      Detected System
                    </Badge>
                  )}
                </div>

                {/* Content Renderers */}
                {activeTab !== "managers" ? (
                  <div className="space-y-6">
                    {/* Primary/Recommended File Card */}
                    {activeDownloads.primary && (
                      <div className="p-6 bg-muted/40 border border-border/80 rounded-2xl">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <span className="text-xs font-bold text-[#ea4c3c] tracking-widest uppercase block mb-1">
                              Recommended Package
                            </span>
                            <h3 className="text-xl font-bold text-foreground">
                              {activeDownloads.primary.label}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {activeDownloads.primary.desc}
                            </p>
                          </div>
                          
                          <div className="flex flex-col items-end text-xs text-muted-foreground font-mono bg-background border border-border px-3 py-2 rounded-xl shrink-0">
                            <span className="flex items-center gap-1.5 mb-1 font-semibold text-foreground">
                              <HardDrive className="w-3.5 h-3.5" />
                              {formatSize(activeDownloads.primary.asset.size)}
                            </span>
                            <span className="flex items-center gap-1">
                              <DownloadSimple className="w-3.5 h-3.5" />
                              {formatDownloads(activeDownloads.primary.asset.download_count)} downloads
                            </span>
                          </div>
                        </div>

                        <Button
                          size="lg"
                          onClick={() => handleDownload(activeDownloads.primary!.asset.browser_download_url)}
                          className="w-full h-12 bg-primary hover:bg-primary/95 text-white border-0 shadow-md shadow-primary/25 rounded-xl font-bold text-sm tracking-wide transition-all"
                        >
                          <DownloadSimple className="w-4.5 h-4.5 mr-2 stroke-[2.5]" />
                          Download Recommended Installer
                        </Button>
                      </div>
                    )}

                    {/* Alternatives list */}
                    {activeDownloads.alternatives.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-1">
                          Alternative Formats & Architectures
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeDownloads.alternatives.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleDownload(item.url || item.asset.browser_download_url)}
                              className="flex items-center justify-between p-4 bg-background hover:bg-muted/45 border border-border/85 hover:border-primary/20 rounded-2xl text-left cursor-pointer transition-all shadow-sm group"
                            >
                              <div className="pr-3 truncate">
                                <span className="font-bold text-sm text-foreground block truncate group-hover:text-primary transition-colors">
                                  {item.label}
                                </span>
                                <span className="text-xs text-muted-foreground block truncate mt-0.5">
                                  {item.desc}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground shrink-0 border-l border-border/80 pl-3">
                                {item.asset ? (
                                  <span>{formatSize(item.asset.size)}</span>
                                ) : (
                                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-sans font-bold uppercase tracking-wider shrink-0">Store</span>
                                )}
                                <DownloadSimple className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Package Managers tab */
                  <div className="space-y-6 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                    {/* Winget */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 font-bold text-foreground">
                        <Terminal className="w-5 h-5 text-primary" />
                        <span>Windows (Winget)</span>
                      </div>
                      <CommandLine command="winget install CI010.XMinecraftLauncher" />
                    </div>

                    {/* Homebrew */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 font-bold text-foreground">
                        <Terminal className="w-5 h-5 text-primary" />
                        <span>macOS (Homebrew)</span>
                      </div>
                      <CommandLine command="brew install --cask --no-quarantine voxelum/xmcl" />
                    </div>

                    {/* Flatpak */}
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2 font-bold text-foreground">
                        <Terminal className="w-5 h-5 text-primary" />
                        <span>Linux (Flatpak)</span>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Manual Install</span>
                        <CommandLine command="flatpak install flathub app.xmcl.voxelum" />
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Run</span>
                        <CommandLine command="flatpak run app.xmcl.voxelum" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions - Older releases and Github */}
            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <span className="text-sm text-muted-foreground">
                {t("downloadMessages.lookingForOlder") || "Looking for older versions?"}
              </span>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => window.open(latestRelease.html_url, "_blank")}
                  className="border-border hover:bg-muted text-foreground text-xs font-semibold px-4 rounded-xl"
                >
                  <ArrowSquareOut className="w-4 h-4 mr-1.5" />
                  {t("downloadMessages.releaseNotes") || "Release Notes"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://github.com/Voxelum/x-minecraft-launcher/releases", "_blank")}
                  className="border-border hover:bg-muted text-foreground text-xs font-semibold px-4 rounded-xl"
                >
                  <GithubLogo className="w-4 h-4 mr-1.5" />
                  {t("downloadMessages.allReleases") || "All Releases"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default NewDownloadSection;
