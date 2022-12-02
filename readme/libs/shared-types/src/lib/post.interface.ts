import { PostState } from './post-state.enum';
import { PostType} from './post-type.enum';

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
    type: PostType;
    citation: string;
    author: string;
    image: string;
    reference: string;
    description: string;
    title: string;
    preview: string;
    content: string;
    linkVideo: string;
}