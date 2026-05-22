import React from 'react';

export const ShowMoreButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-blue-500 hover:text-blue-600">
      Show More
    </button>
  );
};
