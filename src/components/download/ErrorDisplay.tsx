import React from 'react';

export const ErrorDisplay: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-center">
      <p className="text-red-400">{error}</p>
    </div>
  );
};
