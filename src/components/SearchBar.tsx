import React, { useState, useRef } from 'react';
import { FiSearch, FiX } from "react-icons/fi";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({ }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clearText = () => {
    setSearchText('');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  return (
    <div className='relative'>
      <div
        className={
          isFocused ? 'bg-gray2 mb-4 rounded-full px-4 py-2 ring-1 ring-accentBlue'
            : 'bg-gray2 mb-4 rounded-full px-4 py-2'
        }
      >
        <div className="flex items-center space-x-4">
          <FiSearch className={isFocused ? 'text-accentBlue' : 'text-gray-500'} />

          <input
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search"
            className="w-full bg-gray2 text-md text-gray-200 font-sm placeholder-gray3 focus:outline-none"
          />

          <div>
            <FiX
              size={24}
              color='black'
              className={
                searchText !== '' && isFocused
                  ? 'visible bg-accentBlue rounded-full cursor-pointer'
                  : 'invisible'
              }
              onMouseDown={(e) => {
                e.preventDefault();
                clearText();
              }}
            />
          </div>
        </div>
      </div>

      <div
        className={
          `${isFocused ? 'visible' : 'invisible'} absolute p-4 bg-black rounded-xl shadow-custom-light text-gray3`
        }
      >
        search posts by username, user id or text body
      </div>
    </div>
  );
}

export default SearchBar;
