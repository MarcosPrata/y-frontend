"use client"

import React, { useEffect, useState } from 'react';

import { Post } from '@/types';

import NavBar from '@/components/NavBar';
import SelectionHeader from '@/components/SelectionHeader';
import PostList from '@/components/PostList';
import CommentsList from '@/components/CommentsList';
import TrendingTopics from '@/components/TrendingTopics';
import SearchBar from '@/components/SearchBar';
import PostCardWhite from '@/components/PostCardWhite';
import NewPostCard from '@/components/NewPostCard';
import { getPostsAsync } from '@/lib/features/posts/posts.thunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { getCommentsAsync } from '@/lib/features/comments/comments.thunk';
import { getUsersAsync } from '@/lib/features/users/users.thunk';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPostsAsync());
    dispatch(getCommentsAsync());
    dispatch(getUsersAsync());
  }, [dispatch]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  function closePost() { setSelectedPost(null) }

  return (
    <div className="flex h-screen bg-black text-white">
      <NavBar />

      <div className={`${selectedPost ? "w-1/3" : "w-full"} relative max-w-2xl h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-300 scrollbar-track-slate-700`}>
        <SelectionHeader className="sticky top-0 left-0 right-0 bg-blackTranslucent" />
        <NewPostCard />
        <PostList selectedPostId={selectedPost?.id} onSelectPost={setSelectedPost} />
      </div>

      {selectedPost &&
        <div className={`w-2/3 h-full overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-300 scrollbar-track-slate-700`}>
          <div className='sticky top-0 left-0 right-0 bg-black pt-3'>
            <div className='flex justify-end itens-end mb-2 br-2 cursor-pointer'>
              <span
                className='font-bold text-xl'
                onClick={closePost}
              >X</span>
            </div>
            <PostCardWhite key={selectedPost.id} postId={selectedPost.id} className='mb-4' />
          </div>

          <CommentsList postId={selectedPost.id} className="border-l border-l-gray-700 ml-3" />
        </div>
      }

      {!selectedPost &&
        <div className={`w-1/3 p-4 h-full overflow-y-hidden scrollbar-thin    scrollbar-thumb-rounded-full    scrollbar-track-rounded-full    scrollbar-thumb-slate-300    scrollbar-track-slate-700`}>
          <SearchBar />
          <TrendingTopics />
          <div className='mt-4 text-sm text-gray1'>
            <div>
              <a href="" className='hover:underline mr-3'>Terms of Service</a>
              <a href="" className='hover:underline'>Privacy Policy</a>
            </div>
            <div>
              <a href="" className='hover:underline mr-3'>Cookies Policy</a>
              <a href="" className='hover:underline'>Acessibility</a>
            </div>
            <div>
              <a href="" className='hover:underline mr-3'>Ad Information</a>
              <a href="" className='hover:underline'>More ...</a>
            </div>
            © 2024 Y Corp.
          </div>
        </div>
      }

    </div>
  );
}

export default App;
