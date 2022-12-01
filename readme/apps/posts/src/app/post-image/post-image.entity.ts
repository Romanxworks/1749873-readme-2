import { PostImageInterface, PostState } from '@readme/shared-types';

export class PostImageEntity implements PostImageInterface {
    public image: string;
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


    constructor (post: PostImageInterface){
        this.fillEntity(post) ;
    }

    public toObject(){
        return {...this};
    }

    public fillEntity(post: PostImageInterface){
        this.image = post.image;
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