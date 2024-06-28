import React from 'react';
import ComentCard from './ComentCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

interface CommentsListProps {
  className: string
  postId: number;
}

const CommentsList: React.FC<CommentsListProps> = ({ className, postId }) => {
  const comments = useSelector((state: RootState) => state.comments.comments.filter(it => it.postId == postId))

  return (
    <div className={`${className}`}>
      {comments.map(comment => (
        <ComentCard
          key={comment.id}
          comment={comment}
          className=''
        />
      ))}
    </div>
  );
}

export default CommentsList;