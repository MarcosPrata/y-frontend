import { Post, User } from '@/types';
import React, { useEffect, useState } from 'react';

interface PostCardWhiteProps {
  className: string
  postId: number;
  onClick?: () => void;
}

const PostCardWhite: React.FC<PostCardWhiteProps> = ({ postId, className, onClick }) => {
  const [post, setPost] = useState<Post>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(postData => {
        fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
          .then(response => response.json())
          .then(userData => setUser(userData))

        setPost(postData)
      })
  }, [postId]);

  return (
    <div
      className={`rounded-xl border-b border-b-gray-700 bg-white ${className}`}
      onClick={onClick}
    >
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          @{user?.username}
        </span>

        <span className="text-gray3 font-bold text-md mb-1">{post?.title}</span>
      </div>

      <div className="px-6 py-4">
        <p className="text-gray3 text-sm">
          {post?.body}
        </p>
      </div>

      <div className='border-t p-3 flex'>
        <div className="flex w-full border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            placeholder="Add a comment:"
            className="w-2/3 text-gray-700 px-5 py-2 focus:outline-none border-none"
          />
          <input
            type="email"
            placeholder="Email:"
            className="w-1/3 text-gray-700 px-5 py-2 focus:outline-none border-l border-gray-300"
          />
        </div>

        <button
          onClick={() => { }}
          className="ml-3 bg-blue-500 text-white text-md font-semibold px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Comment
        </button>
      </div>

    </div>
  );
}

export default PostCardWhite;
