import React, { useState, useRef } from 'react';
import { FiMessageCircle } from 'react-icons/fi';

interface CommentProps {
  className?: string | undefined;
  comment: {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
  };
}

const Comment: React.FC<CommentProps> = ({ className, comment }) => {
  const [reply, setReply] = useState<string>('');
  const [showInput, setshowInput] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setIsFocused(false);
      setshowInput(false);
    }, 100);
  };

  const handleReplySubmit = () => {
    setshowInput(false);
  };

  const handleReplyClick = () => {
    setshowInput(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <div className={`mb-4 flex ${className}`}>
      <div className=''>
        <div className='border-t border-t-gray-700 w-6 mt-7' />
      </div>
      <div>
        <div className="pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {comment.email}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold text-paleWhite">{comment.name}</h4>
        </div>
        <p className="text-paleWhite text-sm mb-4">{comment.body}</p>
        <div className="actions flex items-center space-x-4">
          <div
            className='flex justify-center itens-center cursor-pointer'
            onClick={handleReplyClick}
          >
            <FiMessageCircle
              size={24}
              className={`${showInput ? "text-accentBlue" : "text-paleWhite"}`}
            />
            <div className={`${showInput ? "hidden" : "visible"} flex justify-center itens-center ml-1`}>
              <div className={`text-xs`}>Reply</div>
            </div>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={reply}
            onChange={handleReplyChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Reply..."
            className={`${showInput ? "visible" : "invisible"} text-gray3 px-5 border border-gray-300 rounded-full p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button
            onClick={handleReplySubmit}
            className={`${showInput ? "visible" : "invisible"} bg-blue-500 text-white text-md font-semibold px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
