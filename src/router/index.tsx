import { createBrowserRouter, createHashRouter, Navigate } from 'react-router-dom';
import React from 'react';
import App from '../App';
import PostsList from '../components/Posts';
import Albums from '../components/Albums';
import Photos from '../components/Photos';

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to={"/users"} />
  },
  {
    path: "/users",
    element: <App />,
  },
  {
    path: "/users/:userId/albums/",
    element: <Albums />,
  },
  {
    path: "/users/:userId/albums/:albumId",
    element: <Photos />
  },
  {
    path: "/users/:userId/posts/",
    element: <PostsList />
  }
]);
