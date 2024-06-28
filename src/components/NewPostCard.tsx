import React, { useState } from 'react';
import { FiSend, FiImage } from 'react-icons/fi';

interface NewPostCardProps {
  className?: string | undefined
}

const NewPostCard: React.FC<NewPostCardProps> = ({ className }) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    // Submit title to backend
  };


  return (
    <div className={`p-2 border-b border-gray-700 flex ${className}`}>
      <div>
        <FiSend size={28} className='ml-4 mt-4'></FiSend>
      </div>
      <div className='flex-1'>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="What's happening?"
            className="w-full bg-black text-lg mx-4 my-4 text-gray-200 font-medium placeholder-gray1 focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={title}
            onChange={handleBodyChange}
            placeholder="The details goes here!"
            className="w-full bg-black text-md mx-4 mb-4 text-gray-200 font-medium placeholder-gray1 focus:outline-none"
          />
        </div>

        <div className='flex itens-end justify-end'>
          <button
            onClick={handleSubmit}
            className="bg-accentBlue text-white font-bold px-4 py-2 mr-2 mb-1 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPostCard;
