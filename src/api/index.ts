import { IAlbum } from '../types/interfaces/Album';
import { IComment } from '../types/interfaces/Comment';
import { IPhoto } from '../types/interfaces/Photo';
import { IPost } from '../types/interfaces/Post';
import { IUser } from '../types/interfaces/User';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  const data = fetch(fullURL)
    .then(res => res.json());

  return data;
}

export const getUsers = (): Promise<IUser[]> => get('/users');

export const getUserPosts = (userId: number): Promise<IPost[]> => get(`/users/${userId}/posts`);

export const getUserAlbums = (userId: number): Promise<IAlbum[]> => get(`/users/${userId}/albums`);

export const getPostComments = (postId: number): Promise<IComment[]> => get(`/posts/${postId}/comments`);

export const getAllbumPhotos = (albumId: number): Promise<IPhoto[]> => get(`/albums/${albumId}/photos`);