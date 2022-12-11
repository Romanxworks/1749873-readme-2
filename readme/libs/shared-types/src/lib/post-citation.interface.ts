import { PostInterface } from './post.interface';

export interface PostCitationInterface extends PostInterface{
    citation: string;
    author: string;
    
}