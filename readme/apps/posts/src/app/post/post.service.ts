import { Injectable } from '@nestjs/common';
import { PostMemoryRepository } from './post-memory.repository';
import * as dayjs from 'dayjs';
import { PostEntity } from './post.entity';
import { PostState } from '@readme/shared-types';
import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
    constructor (
        private readonly postMemory: PostMemoryRepository
    ) {}


    async getPosts () {
        return this.postMemory.show();
    }

    async create(dto: CreatePostDto){
        const {userId, tags} = dto;
        const post = {id:'', date: dayjs().toDate(), tags, userId, state: PostState.Published, isRepost: false, commentCount: 0, likesCount: 0, repostsCount: 0, primaryAuthor:'', primaryId: '', images:[]};
        const postEntity = new PostEntity(post);
        return this.postMemory.create(postEntity);

    }

    async getPost(id: string){
        return this.postMemory.findById(id);
    }

    async updatePost(id: string, dto: PostEntity){
        return this.postMemory.update(id, dto);
    }

    async deletePost(id: string){
        return this.postMemory.destroy(id);
    }

    async getPostsByUser(id: string){
        return this.postMemory.findByUser(id);
    }

    // async repost(userId: string, postId: string){
    //     const oldPost = await this.postMemory.findById(postId);
    //     const repost = {...oldPost, userId: userId, id:'', primaryId:oldPost.id, primaryAuthor: oldPost.userId, isRepost: true };
    //     console.log(repost);
    //     const repostEntity = new PostEntity(repost);
    //     return this.postMemory.create(repostEntity);
    // }
}

