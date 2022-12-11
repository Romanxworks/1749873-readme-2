import {CommentInterface} from '@readme/shared-types';

export class CommentEntity implements CommentInterface {
    public id: string;
    public date: Date;
    public content: string;
    public userId: string;
    public postId: string;

    constructor(comment: CommentInterface) {
        this.fillEntity(comment);
    }

    public toObject() {
        return {...this};
    }

    public fillEntity(comment: CommentInterface) {
        this.id = comment.id;
        this.date = comment.date;
        this.content = comment.content;
        this.userId = comment.userId;
        this.postId = comment.postId;

    }

}