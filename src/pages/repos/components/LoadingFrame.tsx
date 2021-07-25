import React from 'react';

export default function LoadingFrame() {
  return (
    <div className="animate-pulse flex flex-col">
      <div className="h-4 w-1/3 bg-gray-300 rounded mb-4"></div>
      <div className="h-24 w-full bg-gray-300 rounded"></div>
    </div>
  );
}
