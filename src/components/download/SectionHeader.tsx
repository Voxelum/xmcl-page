
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
      {/* Floating elements */}
      <div className="relative">
        <motion.div
          className="absolute -top-10 left-1/4 w-6 h-6 bg-blue-400/30 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-5 right-1/3 w-4 h-4 bg-purple-400/40 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 rounded-full border border-blue-500/30 mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <DownloadSimple className="w-5 h-5 text-blue-400" />
          </motion.div>
          <span className="text-blue-400 font-semibold">Ready to Download</span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-blue-500">
            {title}
          </span>
        </motion.h2>
        
        {/* Animated underline */}
        <motion.div
          className="w-32 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
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
            className="flex items-center gap-3 px-6 py-3 bg-green-500/20 rounded-xl border border-green-500/30"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-green-400" />
            </motion.div>
            <div className="text-left">
              <p className="text-green-400 font-semibold text-sm">{versionLabel}</p>
              <p className="text-white font-bold">{versionTag}</p>
            </div>
          </motion.div>
          
          {/* GitHub Stats */}
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white/80 text-sm font-medium">
                {repoLoading ? "..." : `${formattedStars} Stars`}
              </span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm font-medium">
                {downloadsLoading ? "..." : `${formattedDownloads} Downloads`}
              </span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <GitBranch className="w-4 h-4 text-purple-400" />
              <span className="text-white/80 text-sm font-medium">
                {repoLoading ? "..." : `${formattedForks} Forks`}
              </span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <Lightning className="w-4 h-4 text-yellow-400" />
              <span className="text-white/80 text-sm font-medium">Lightning Fast</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
