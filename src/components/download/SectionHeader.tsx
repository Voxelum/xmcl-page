
import { motion } from "framer-motion";
import { DownloadSimple, Star, Users, Lightning, GitBranch } from "@phosphor-icons/react";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { useGitHubRepoStats } from "@/hooks/useGitHubRepoStats";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  versionLabel: string;
  versionTag: string;
}

export function SectionHeader({ title, subtitle, versionLabel, versionTag }: SectionHeaderProps) {
  const { formattedDownloads, isLoading: downloadsLoading } = useGitHubStats();
  const { formattedStars, formattedForks, isLoading: repoLoading } = useGitHubRepoStats();

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#ea4c3c]/10 rounded-full border border-[#ea4c3c]/20 mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <DownloadSimple className="w-5 h-5 text-[#ea4c3c]" />
          </motion.div>
          <span className="text-[#ea4c3c] font-semibold">Ready to Download</span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-[#ea4c3c]">
            {title}
          </span>
        </motion.h2>
        
        {/* Animated underline */}
        <motion.div
          className="w-32 h-1.5 bg-[#ea4c3c] mx-auto rounded-full mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        
        {/* Version and Stats */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Version Badge */}
          <motion.div
            className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-[#ea4c3c]" />
            </motion.div>
            <div className="text-left">
              <p className="text-[#ea4c3c] font-semibold text-sm">{versionLabel}</p>
              <p className="text-foreground font-bold">{versionTag}</p>
            </div>
          </motion.div>
          
          {/* GitHub Stats */}
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-[#ea4c3c]" />
              <span className="text-foreground/80 text-sm font-medium">
                {repoLoading ? "..." : `${formattedStars} Stars`}
              </span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4 text-[#ea4c3c]" />
              <span className="text-foreground/80 text-sm font-medium">
                {downloadsLoading ? "..." : `${formattedDownloads} Downloads`}
              </span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
              whileHover={{ scale: 1.05 }}
            >
              <GitBranch className="w-4 h-4 text-[#ea4c3c]" />
              <span className="text-foreground/80 text-sm font-medium">
                {repoLoading ? "..." : `${formattedForks} Forks`}
              </span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
              whileHover={{ scale: 1.05 }}
            >
              <Lightning className="w-4 h-4 text-amber-500" />
              <span className="text-foreground/80 text-sm font-medium">Lightning Fast</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
