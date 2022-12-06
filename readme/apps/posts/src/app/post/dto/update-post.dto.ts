import { PostState, PostType } from '@readme/shared-types';

export class UpdatePostDto {
    public userId?: string;
    public tags?: string[];
    public state?: PostState;
    public images?: string[];
    public title?: string;
    public link?: string;
    public preview?: string;
    public content?: string;
    public reference?: string;
    public description?: string;
    public image?: string;
    public citation?: string;
    public author?: string;
    public date?: Date;
    public isRepost?: boolean;
    public primaryId?: string;
    public primaryAuthor?: string;
    public likesCount?: number;
    public repostsCount?: number;
    public commentCount?: number;
    public type?: PostType;
    public linkVideo?: string;
}