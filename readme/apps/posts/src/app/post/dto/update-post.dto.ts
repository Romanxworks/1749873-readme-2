import { PostState } from '@readme/shared-types';

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
}