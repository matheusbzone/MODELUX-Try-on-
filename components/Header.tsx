
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-12 py-10 flex justify-end items-center z-50 pointer-events-none">
      <div className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.3em] text-white/30 uppercase pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          SISTEMA ATIVO
        </div>
        <div className="w-[1px] h-4 bg-white/10" />
        <span className="hover:text-blue-500 transition-colors cursor-pointer">SAAS PROVADOR VIRTUAL</span>
        <span className="hover:text-blue-500 transition-colors cursor-pointer">TECNOLOGIA DE MODA</span>
      </div>
    </header>
  );
};
