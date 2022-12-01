import { PostState } from './post-state.enum';

export interface PostInterface{
    id: string;
    userId: string;
    date: Date;
    state: PostState;
    tags: string[];
    images: string[];
    isRepost: boolean;
    primaryId: string;
    primaryAuthor: string;
    likesCount: number;
    repostsCount: number;
    commentCount: number;
}