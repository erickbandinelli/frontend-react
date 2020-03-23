import { action } from 'typesafe-actions';
import { PostsTypes, Posts } from './types';


export const loadRequest = () => action(PostsTypes.LOAD_REQUEST);

export const loadSuccces = (data: Posts[]) => action(PostsTypes.LOAD_SUCCCES, data);

export const loadFailure = () => action(PostsTypes.LOAD_FAILURE);
