import React from 'react';

interface PostCardProps {
  post: {
    id: number;
    title: string;
    body: string;
    username: string;
  };
  isSelected: boolean
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, isSelected, onClick }) => {
  return (
    <div
      className={`max-w-2xl border-b border-b-gray-700 ${isSelected ? "bg-white/20" : ""} hover:bg-white/15 cursor-pointer`}
      onClick={onClick}
    >
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          @{post.username}
        </span>

        <span className="text-white font-bold text-md mb-1">{post.title}</span>
      </div>

      <div className="px-6 py-4">
        <p className="text-white text-sm">
          {post.body}
        </p>
      </div>

    </div>
  );
}

export default PostCard;
