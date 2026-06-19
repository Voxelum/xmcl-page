import React from 'react';

export const ShowMoreButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-[#ea4c3c] hover:text-[#d63e2c] font-semibold transition-colors duration-200">
      Show More
    </button>
  );
};
