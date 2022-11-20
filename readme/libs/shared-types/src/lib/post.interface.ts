import { PostState } from './post-state.enum';

export interface PostInterface{
    id: string;
    userId: string;
    date: Date;
    state: PostState;
    tags: string[];
    isRepost: boolean;
    primaryId: string;
    primaryAuthor: string;
}