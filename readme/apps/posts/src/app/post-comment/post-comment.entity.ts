import {CommentInterface} from '@readme/shared-types';

export class PostCommentEntity implements CommentInterface {
    public id: number;
    public content: string;
    public userId: string;
    public postId: number;

    constructor(comment: CommentInterface) {
        this.fillEntity(comment);
    }

    public toObject() {
        return {...this};
    }

    public fillEntity(comment: CommentInterface) {
        this.id = comment.id;
        this.content = comment.content;
        this.userId = comment.userId;
        this.postId = comment.postId;

    }
}