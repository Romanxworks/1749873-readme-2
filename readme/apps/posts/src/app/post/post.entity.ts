import {PostInterface, PostState} from '@readme/shared-types';

export class PostEntity implements PostInterface {
    public id: string;
    public userId: string;
    public date: Date;
    public state: PostState;
    public tags: string[];
    public images: string[];
    public isRepost: boolean;
    public primaryId: string;
    public primaryAuthor: string;
    public likesCount: number;
    public repostsCount: number;
    public commentCount: number;


    constructor (post: PostInterface){
        this.fillEntity(post) ;
    }

    public toObject(){
        return {...this};
    }

    public fillEntity(post: PostInterface){
        this.id = post.id;
        this.userId = post.userId;
        this.date = post.date;
        this.state = post.state;
        this.isRepost = post.isRepost;
        this.tags = post.tags;
        this.images = post.images;
        this.primaryId = post.primaryId;
        this.primaryAuthor = post.primaryAuthor;
        this.likesCount = post.likesCount;
        this.repostsCount = post.repostsCount;
        this.commentCount = post.commentCount; 

    }
}