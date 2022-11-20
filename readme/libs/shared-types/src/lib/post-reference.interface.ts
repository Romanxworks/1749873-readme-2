import { PostInterface } from './post.interface';

export interface PostReferenceInterface extends PostInterface {
    reference: string;
    description: string;
}