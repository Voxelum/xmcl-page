import React from "react";
import { motion } from "framer-motion";
import { WarningCircle, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

interface OSWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fromOS: string;
  toOS: string;
}

export const OSWarningModal: React.FC<OSWarningModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  fromOS,
  toOS,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        className="relative bg-slate-800 dark:bg-slate-800 light:bg-white rounded-2xl p-6 max-w-md w-full border border-slate-700 dark:border-slate-700 light:border-slate-300 shadow-2xl z-10"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
              <WarningCircle className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-800">
              {t("downloadMessages.osWarningTitle")}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed">
          {t("downloadMessages.osWarningDescription")}
          <span className="font-semibold text-white dark:text-white light:text-slate-800">
            {fromOS}
          </span>
          {" "}
          {t("downloadMessages.osWarningTo")}
          {" "}
          <span className="font-semibold text-white dark:text-white light:text-slate-800">
            {toOS}
          </span>
          . {t("downloadMessages.osWarningNote")}
        </p>

        <div className="flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 border-slate-600 dark:border-slate-600 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100"
          >
            {t("downloadMessages.osWarningCancel")}
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
          >
            {t("downloadMessages.osWarningConfirm")}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
