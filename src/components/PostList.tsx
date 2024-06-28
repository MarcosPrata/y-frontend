import React from 'react';
import PostCard from './PostCard';
import type { Post } from '@/types'

import type { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

interface PostListProps {
    selectedPostId: number | undefined;
    onSelectPost: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ selectedPostId, onSelectPost }) => {
    const posts = useSelector((state: RootState) => state.posts.posts)

    return (
        <div>
            <div className='flex w-full py-3 border-b items-center justify-center border-gray-700 hover:bg-white/5 cursor-pointer'>
                <span className='text-sm text-accentBlue'>Show 33 posts</span>
            </div>

            {posts.map(post => (
                <PostCard
                    key={post.id}
                    isSelected={post.id == selectedPostId}
                    postId={post.id}
                    onClick={() => onSelectPost(post)}
                />
            ))}
        </div>
    );
}

export default PostList;