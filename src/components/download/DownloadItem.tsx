import React, { useState } from "react";
import { DownloadSimple, Copy, Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { toast } from "sonner";
import { PackageIcon } from "./PackageIcon.tsx";

interface DownloadItemProps {
  title: string;
  packageType: string;
  downloadUrl?: string;
  size?: number;
  downloads?: number;
  isCommand?: boolean;
  commandText?: string;
  gradient: string;
}

export const DownloadItem: React.FC<DownloadItemProps> = ({
  title,
  packageType,
  downloadUrl,
  size,
  downloads,
  isCommand = false,
  commandText = "",
  gradient,
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleAction = () => {
    if (isCommand && commandText) {
      navigator.clipboard.writeText(commandText.replace(/&#10;/g, "\n"));
      setCopied(true);
      toast.success(t("downloadMessages.copiedToClipboard"));
      setTimeout(() => setCopied(false), 2000);
    } else if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] hover:border-[#ea4c3c] transition-all duration-300">
      <div className="p-6 flex items-center gap-6 flex-wrap sm:flex-nowrap">
        <PackageIcon type={packageType} gradient={gradient} />

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white mb-2 truncate">
            {title}
          </h3>

          {!isCommand && (
            <div className="flex items-center gap-4 flex-wrap">
              {size && (
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 text-slate-400"
                  >
                    <path
                      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14-7l-5-5m0 0L7 8m5-5v12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-slate-400 font-medium">
                    {size} {t("downloadMessages.sizeMB")}
                  </span>
                </div>
              )}
              {downloads !== undefined && (
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 text-slate-400"
                  >
                    <path
                      d="M12 2v13m0 0l-4-4m4 4l4-4M5 17v3a2 2 0 002 2h10a2 2 0 002-2v-3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-slate-400 font-medium">
                    {formatNumber(downloads)}{" "}
                    {t("downloadMessages.downloads")}
                  </span>
                </div>
              )}
            </div>
          )}

          {isCommand && commandText && (
            <div className="mt-2 p-3 bg-black/40 rounded-lg border border-slate-700/50">
              <code className="text-xs text-green-400 font-mono break-all leading-relaxed">
                {commandText.replace(/&#10;/g, "\n")}
              </code>
            </div>
          )}
        </div>

        <Button
          onClick={handleAction}
          size="lg"
          className="bg-[#ea4c3c] hover:bg-[#d63e2c] text-white font-semibold transition-all duration-300 px-8 whitespace-nowrap rounded-xl border-0"
        >
          {isCommand ? (
            copied ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                {t("downloadMessages.copied")}
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 mr-2" />
                {t("downloadMessages.copyCommand")}
              </>
            )
          ) : (
            <>
              <DownloadSimple className="w-5 h-5 mr-2" />
              {t("downloadMessages.download")}
            </>
          )}
        </Button>
      </div>

    </div>
  );
};
