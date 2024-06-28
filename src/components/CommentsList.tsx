// CommentsList.tsx
import React, { useState, useEffect } from 'react';
import { Comment } from '@/types/Comment';
import ComentCard from './ComentCard';


interface CommentsListProps {
  className: string
  postId: number;
}

const CommentsList: React.FC<CommentsListProps> = ({ className, postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data));

  }, [postId]);

  return (
    <div className={`${className}`}>
      {comments.map(comment => (
        <ComentCard key={comment.id} comment={comment} className='' />
      ))}
    </div>
  );
}

export default CommentsList;