import { getUserPosts } from '../../api';
import BackButton from '../../elements/BackButton';
import React from 'react';
import { Spinner } from '../../elements/Spinner';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../types/interfaces/Post';
import PostItem from './PostItem';
import './styles.scss';

interface PostsProps {

}

const PostsList: FC<PostsProps> = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getUserPosts(Number(userId))
      .then(loadedPosts => {
        setPosts(loadedPosts);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="posts-page">
      <BackButton />
      <div className="posts-content">
        {!posts.length && (
          <Spinner />
        )}
        {posts && posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;