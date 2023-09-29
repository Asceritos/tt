import { getPostComments } from '../../api';
import React from 'react';
import Comment from '../Comment';
import { Spinner } from '../../elements/Spinner';
import { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { IComment } from '../../types/interfaces/Comment';
import './styles.scss';

interface CommentsProps {
  postId: number
}

const Comments: FC<CommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [selectedComment, setSelectedComment] = useState<string>('');

  let location = useLocation();

  console.log('location', location);

  const handleCommentSelect = (commentId: number): void => {
    setSelectedComment(prev => prev !== `${postId}${commentId}` ? `${postId}${commentId}` : '');
  }

  useEffect(() => {
    getPostComments(postId)
      .then(loadedComments => {
        setComments(loadedComments);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h3>Comments:</h3>
      {!comments.length && (
        <Spinner />
      )}
      {comments && comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          postId={postId}
          onCommentSelect={handleCommentSelect}
          selectedComment={selectedComment}
        />
      ))}
    </div>
  );
}

export default Comments;