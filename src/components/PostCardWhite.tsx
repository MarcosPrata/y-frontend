import React, { useEffect, useState } from 'react';

interface PostCardWhiteProps {
  className: string
  postId: number;
  onClick?: () => void;
}

interface Post {
  id: number;
  title: string;
  body: string;
  username: string;
}

interface Company {
  "name": string,
  "catchPhrase": string,
  "bs": string
}

interface Geo {
  "lat": string,
  "lng": string,
}

interface Address {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": Geo
}

interface User {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": Address,
  "phone": string,
  "website": string,
  "company": Company
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

    </div>
  );
}

export default PostCardWhite;
