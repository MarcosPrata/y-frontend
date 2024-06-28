import React, { useState } from 'react';
import { FiHome, FiSearch } from 'react-icons/fi';

interface NavBarProps {
  className?: string | undefined
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className={`border-r border-r-gray-700 ${className}`}>
      <div className="w-20 flex flex-col items-center">
        <div className="flex items-center justify-center my-4">
          <div className="text-5xl p-3 text-paleWhite flex items-center justify-center cursor-pointer w-14 h-14 hover:bg-white/15 hover:rounded-full">
            𝕐
          </div>
        </div>

        <div className="flex items-center justify-center my-4">
          <div className="flex items-center justify-center w-14 h-14 cursor-pointer hover:bg-white/15 hover:rounded-full">
            <FiHome size={26} className="text-paleWhite" />
          </div>
        </div>

        <div className="flex items-center justify-center my-4">
          <div className="flex items-center justify-center w-14 h-14 cursor-pointer hover:bg-white/15 hover:rounded-full">
            <FiSearch size={26} className="text-paleWhite" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
