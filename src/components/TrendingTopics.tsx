import React, { useState } from 'react';

interface TrendingTopicsProps {

}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({  }) => {
  const [reply, setReply] = useState<string>('');

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = () => {
    // Submit reply to backend
  };

  return (
    <div
      className="max-w-sm border border-gray-700 rounded-xl"
    >
      <div className='text-xl font-bold m-4'>Trending Topics</div>

      <div className='flex itens-center p-4 hover:bg-white/5 cursor-pointer'>
        <div className='text-3xl mr-3'>
          # 1
        </div>
        <div>
          <div className='font-bold'>
            Corinthians
          </div>
          <div className='text-gray1 text-sm'>
            21,4 mil posts
          </div>
        </div>
      </div>

      <div className='flex itens-center p-4 hover:bg-white/5 cursor-pointer'>
        <div className='text-3xl mr-3'>
          # 2
        </div>
        <div>
          <div className='font-bold'>
            The boys
          </div>
          <div className='text-gray1 text-sm'>
            17,4 mil posts
          </div>
        </div>
      </div>

      <div className='flex itens-center p-4 hover:bg-white/5 cursor-pointer'>
        <div className='text-3xl mr-3'>
          # 3
        </div>
        <div>
          <div className='font-bold'>
            Golpe
          </div>
          <div className='text-gray1 text-sm'>
            15,8 mil posts
          </div>
        </div>
      </div>

      <div className='flex itens-center p-4 hover:bg-white/5 cursor-pointer'>
        <div className='text-3xl mr-3'>
          # 4
        </div>
        <div>
          <div className='font-bold'>
            Elon Musk
          </div>
          <div className='text-gray1 text-sm'>
            15,2 mil posts
          </div>
        </div>
      </div>

      <div className='flex itens-center p-4 hover:bg-white/5 cursor-pointer'>
        <div className='text-3xl mr-3'>
          # 5
        </div>
        <div>
          <div className='font-bold'>
            O STF
          </div>
          <div className='text-gray1 text-sm'>
            10,4 mil posts
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTopics;
