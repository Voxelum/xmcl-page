import React from "react";
import { useTranslation } from '@/hooks/useTranslation';

interface PackageIconProps {
  type: string;
  gradient: string;
}

export const PackageIcon: React.FC<PackageIconProps> = ({ type, gradient }) => {
  const renderIcon = () => {
    switch (type) {
      case "installer":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" fill="currentColor" />
          </svg>
        );
      case "archive":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M9 3v6m6-6v6M9 13v6m6-6v6"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "store":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      case "terminal":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M6 8l4 4-4 4m6 0h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "package":
      case "deb":
      case "rpm":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path
              d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 22V12m0 0L3 7m9 5l9-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "appimage":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M9 9h6m-6 4h6m-6 4h4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "tar":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M14 2v6h6M12 18v-6m-3 3l3-3 3 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "aur":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path
              d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 8v8m-4-4h8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "flathub":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 6v12M6 12h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center shadow-lg shrink-0 text-white`}
    >
      {renderIcon()}
    </div>
  );
};
