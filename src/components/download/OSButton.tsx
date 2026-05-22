import React from "react";
import { motion } from "framer-motion";
import { Lightning, Lightning as Zap } from "@phosphor-icons/react";
import { useTranslation } from "@/hooks/useTranslation";

interface OSButtonProps {
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
  isDetected: boolean;
  onClick: () => void;
  color: string;
}

export const OSButton: React.FC<OSButtonProps> = ({
  name,
  icon,
  isSelected,
  isDetected,
  onClick,
  color,
}) => {
  const { t } = useTranslation();

  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
        isSelected
          ? `bg-blue-500/20 ${color} text-white shadow-2xl scale-105`
          : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white hover:scale-105"
      }`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {isSelected && (
        <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl -z-10" />
      )}

      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl">{icon}</span>
        <span>{name}</span>

        {isDetected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1"
          >
            <Zap className="w-3 h-3" />
            {t("downloadMessages.detected")}
          </motion.div>
        )}
      </div>

      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 30px rgba(168, 85, 247, 0.5)",
              "0 0 20px rgba(236, 72, 153, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};
