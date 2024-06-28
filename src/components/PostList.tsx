import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import type { Post, User } from '@/types'

interface PostListProps {
    selectedPostId: number | undefined;
    onSelectPost: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ selectedPostId, onSelectPost }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setUsers(data));
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                data.forEach((post: Post) => post.username = users.find(user => user.id == post.userId)?.username || "")

                setPosts(data)
            });
    }, [users])

    return (
        <div className="post-list">
            <div className='flex w-full py-3 border-b items-center justify-center border-gray-700 hover:bg-white/5 cursor-pointer'>
                <span className='text-sm text-accentBlue'>Show 33 posts</span>
            </div>

            {posts.map(post => (
                <PostCard key={post.id} isSelected={post.id == selectedPostId} post={post} onClick={() => onSelectPost(post)} />
            ))}
        </div>
    );
}

export default PostList;