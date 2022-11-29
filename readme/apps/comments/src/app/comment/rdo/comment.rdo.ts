import {Expose} from 'class-transformer';

export class CommentRdo {
    @Expose()
    public id: string;

    @Expose()
    public date: Date;

    @Expose()
    public content: string;

    @Expose()
    public userId: string;

    @Expose()
    public postId: string;
}