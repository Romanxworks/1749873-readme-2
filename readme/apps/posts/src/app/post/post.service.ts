import { Injectable } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';
import * as dayjs from 'dayjs';
import { PostEntity } from './post.entity';
import { PostState, PostType } from '@readme/shared-types';
import { CreatePostImageDto } from './dto/create-post-image.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { CreatePostReferenceDto } from './dto/create-post-reference.dto';
import { CreatePostCitationDto } from './dto/create-post-citation.dto';
import { POST_NOT_FOUND } from './post.constant';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
    constructor (
        private readonly postMemory: PostMemoryRepository
    ) {}


    async getPosts () {
        return this.postMemory.getPosts();
    }

    async createImage(dto: CreatePostImageDto){
        const {userId, tags, image} = dto;
        const post = {
            id:'',
            date: dayjs().toDate(),
            tags,
            comments:[],
            userId,
            state: PostState.Published,
            isRepost: false,
            commentCount: 0,
            likesCount: 0,
            repostsCount: 0,
            primaryAuthor:'',
            primaryId: '',
            images:[],
            type: PostType.Image,
            citation: '',
            author: '',
            image: image,
            reference: '',
            description: '',
            title: '',
            preview: '',
            content: '',
            linkVideo: '',
        };
        const postEntity = new PostEntity(post);
        return this.postMemory.create(postEntity);

    }

    async createCitation(dto: CreatePostCitationDto){
        const {userId, tags, citation, author} = dto;
        const post = {
            id:'',
            date: dayjs().toDate(),
            tags,
            comments:[],
            userId,
            state: PostState.Published,
            isRepost: false,
            commentCount: 0,
            likesCount: 0,
            repostsCount: 0,
            primaryAuthor:'',
            primaryId: '',
            images:[],
            type: PostType.Citation,
            citation: citation,
            author: author,
            image: '',
            reference: '',
            description: '',
            title: '',
            preview: '',
            content: '',
            linkVideo: '',
        };
        const postEntity = new PostEntity(post);
        return this.postMemory.create(postEntity);

    }

    async createVideo(dto: CreatePostVideoDto){
        const {userId, tags, linkVideo, title} = dto;
        const post = {
            id:'',
            date: dayjs().toDate(),
            tags,
            comments:[],
            userId,
            state: PostState.Published,
            isRepost: false,
            commentCount: 0,
            likesCount: 0,
            repostsCount: 0,
            primaryAuthor:'',
            primaryId: '',
            images:[],
            type: PostType.Video,
            citation: '',
            author: '',
            image: '',
            reference: '',
            description: '',
            title: title,
            preview: '',
            content: '',
            linkVideo: linkVideo,
        };
        const postEntity = new PostEntity(post);
        return this.postMemory.create(postEntity);

    }

    async createReference(dto: CreatePostReferenceDto){
        const {userId, tags, reference, description} = dto;
        const post = {
            id:'',
            date: dayjs().toDate(),
            tags,
            comments:[],
            userId,
            state: PostState.Published,
            isRepost: false,
            commentCount: 0,
            likesCount: 0,
            repostsCount: 0,
            primaryAuthor:'',
            primaryId: '',
            images:[],
            type: PostType.Reference,
            citation: '',
            author: '',
            image: '',
            reference: reference,
            description: description,
            title: '',
            preview: '',
            content: '',
            linkVideo: '',
        };
        const postEntity = new PostEntity(post);
        return this.postMemory.create(postEntity);

    }

    async createText(dto: CreatePostTextDto){
        const {userId, tags, title, preview, content} = dto;
        const post = {
            id:'',
            date: dayjs().toDate(),
            tags,
            comments:[],
            userId,
            state: PostState.Published,
            isRepost: false,
            commentCount: 0,
            likesCount: 0,
            repostsCount: 0,
            primaryAuthor:'',
            primaryId: '',
            images:[],
            type: PostType.Text,
            citation: '',
            author: '',
            image: '',
            reference: '',
            description: '',
            title: title,
            preview: preview,
            content: content,
            linkVideo: '',
        };
        const postEntity = new PostEntity(post);
        return this.postMemory.create(postEntity);

    }

    async getPost(id: string){
        const existPost = this.postMemory.findById(id); 

        if (!existPost) {
            throw new Error(POST_NOT_FOUND);
        }

        return existPost;
    }

    async updatePost(id: string, dto: UpdatePostDto){
        const existPost = await this.postMemory.findById(id); 
        const updatedPost = Object.assign(existPost, dto);
        if (!existPost) {
            throw new Error(POST_NOT_FOUND);
        }
        const post = new PostEntity(updatedPost);
        return this.postMemory.update(id, post);
    }

    async deletePost(id: string){
        const existPost = this.postMemory.findById(id); 

        if (!existPost) {
            throw new Error(POST_NOT_FOUND);
        }
        return this.postMemory.destroy(id);
    }

    async getPostsByUser(id: string){
        return this.postMemory.findByUser(id);
    }

    async repost(userId: string, postId: string){
        const existPost = this.postMemory.findById(postId); 

        if (!existPost) {
            throw new Error(POST_NOT_FOUND);
        }
        return this.postMemory.repost(userId, postId);
    }
}

