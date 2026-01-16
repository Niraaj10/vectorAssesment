// BaseNode.js

import React from 'react';

const BaseNode = ({ title, children, className = '' }) => {
  return (
    <div className={`
      relative min-w-[210px] transition-all duration-300 ease-in-out
      bg-[#1a1433]/85 backdrop-blur-sm
      border-2 border-[#2e264d]
      rounded-xl
    `}>
      <div className="bg-[#430b8a] rounded-t-xl px-4 py-2 border-b border-[#2e264d] flex items-center justify-between">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-white opacity-90">
          {title}
        </h3>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </div>
  );
};

export default BaseNode;