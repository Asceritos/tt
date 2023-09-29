import { FC } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IComment } from '../../types/interfaces/Comment';

interface CommentProps {
  comment: IComment;
  postId: number;
  onCommentSelect: (commentId: number) => void;
  selectedComment: string;
}

const Comment: FC<CommentProps> = ({
  comment,
  postId,
  onCommentSelect,
  selectedComment,
}) => {
  return (
    <div
      key={comment.id}
      id={`comment-${comment.id}`}
      className={`comment-item ${selectedComment === `${postId}${comment.id}` ? 'comment-item--active' : '' }`}
    >
      <Link
        to={`#comment-${comment.id}`}
        className="link comment-item__link"
        onClick={() => onCommentSelect(comment.id)}
      >
        <h4 className="comment-item__title">{`#${comment.name}`}</h4>
      </Link>

      <p className="comment-item__body">{comment.body}</p>
      <h5 className="comment-item__email">{comment.email}</h5>
    </div>
  );
}

export default Comment;