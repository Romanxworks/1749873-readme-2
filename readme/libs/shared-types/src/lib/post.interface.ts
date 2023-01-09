import { PostState } from './post-state.enum';
import { PostType} from './post-type.enum';
import { TagsInterface } from './tags.interface';
import { CommentInterface } from './comment.interface';

export interface PostInterface{
    id?: number;
    userId: string;
    state: PostState;
    tags: TagsInterface[];
    comments: CommentInterface[];
    images: string[];
    isRepost: boolean;
    primaryId: number;
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
    publishAt?: Date;
    createdAt?: Date;
}