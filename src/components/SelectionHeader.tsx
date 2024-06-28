import React, { useState } from 'react';

interface SelectionHeaderProps {
  className: string
}

const SelectionHeader: React.FC<SelectionHeaderProps> = ({ className }) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);

  return (
    <div
      className={`border-b border-gray-700 flex ${className}`}
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div
        className='flex flex-1 itens-center justify-center hover:bg-white/5 cursor-pointer'
        onMouseDown={() => setSelectedMenuIndex(0)}
      >
        <div>
          <div className={
            selectedMenuIndex == 0
              ? "text-sm font-bold py-4 text-paleWhite py-4"
              : "text-sm font-bold py-4 text-gray3 py-4"
          }>For you</div>
          <div className={`bg-accentBlue h-1 rounded ${selectedMenuIndex == 0 ? "visible" : "invisible"}`}></div>
        </div>
      </div>

      <div
        className='flex flex-1 itens-center justify-center hover:bg-white/5 cursor-pointer'
        onMouseDown={() => setSelectedMenuIndex(1)}
      >
        <div>
          <div className={
            selectedMenuIndex == 1
              ? "text-sm font-bold py-4 text-paleWhite py-4"
              : "text-sm font-bold py-4 text-gray3 py-4"
          }>Following</div>
          <div className={`bg-accentBlue h-1 rounded ${selectedMenuIndex == 1 ? "visible" : "invisible"}`}></div>
        </div>
      </div>
    </div>
  );
}

export default SelectionHeader;
