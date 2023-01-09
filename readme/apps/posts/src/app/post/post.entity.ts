import { Entity } from '@readme/core';
import {PostInterface, PostState, PostType, CommentInterface, TagsInterface} from '@readme/shared-types';

export class PostEntity implements  Entity<PostEntity>, PostInterface {
    public id: number;
    public userId: string;
    public state: PostState;
    public tags: TagsInterface[];
    public comments: CommentInterface[];
    public images: string[];
    public isRepost: boolean;
    public primaryId: number;
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
    public publishAt: Date;
    public createdAt: Date;


    constructor (post: PostInterface){
        this.fillEntity(post) ;
    }



    public toObject(){
        return {
            ...this,
            tags: this.tags.map(({id}) => ({ id })),
            comments: this.comments.map(({id}) => ({id}))
        };
    }

    public fillEntity(post: PostInterface){
        this.id = post.id;
        this.userId = post.userId;
        this.state = PostState.Published;
        this.isRepost = false;
        this.tags = [...post.tags];
        this.comments = [];
        this.images = [...post.images];
        this.primaryId = 0;
        this.primaryAuthor = '';
        this.likesCount = 0;
        this.repostsCount = 0;
        this.commentCount = 0;
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
        this.publishAt = new Date();
        this.createdAt = new Date();
    }
}