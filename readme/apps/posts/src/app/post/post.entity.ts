import {PostInterface, PostState, PostType} from '@readme/shared-types';

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
    public type: PostType;
    public citation: string;
    public author: string;
    public image: string;
    public reference: string;
    public description: string;
    public title: string;
    public preview: string;
    public content: string;
    public linkVideo: string;


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
        this.type = post.type; 
        this.citation = post.citation;
        this.author = post.author;
        this.image = post.image;
        this.reference = post.reference;
        this.description = post.description;
        this.title = post.title;
        this.preview = post.preview;
        this.content = post.content;
        this.linkVideo = post.linkVideo;
         
    }
}