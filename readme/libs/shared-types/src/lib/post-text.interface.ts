import { PostInterface } from './post.interface';

export interface PostTextInterface extends PostInterface {
    title: string;
    preview: string;
    content: string;
}