import Comments from '../../Comments';
import React from 'react';
import { FC, useState } from 'react';
import { IPost } from '../../../types/interfaces/Post';
import './styles.scss';

interface PostItemProps {
  post: IPost,
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);

  const handleOpenComments = () => {
    setIsOpenComments((prev) => !prev);
  }

  return (
    <div className="post">
      <h2 className="post__title">Title: {post.title}</h2>
      <h3 className="post__body post__body--title">Text:</h3>
      <p className="post__body">{post.body}</p>
      {isOpenComments && <Comments postId={post.id} />}
      <button
        type='button'
        className="post__open-comments"
        onClick={() => handleOpenComments()}
      >
        {`${isOpenComments ? 'Close' : 'Open'} comments`}
      </button>
    </div>
  );
}

export default PostItem;