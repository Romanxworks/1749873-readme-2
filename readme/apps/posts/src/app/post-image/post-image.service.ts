import { Injectable } from '@nestjs/common';
import { PostState } from '@readme/shared-types';
import { PostMemoryRepository } from '../post/post-memory.repository';
import { CreatePostImageDto } from './dto/create-post-image.dto';
import { PostImageEntity } from './post-image.entity';
import * as dayjs from 'dayjs';

@Injectable()
export class PostImageService {
    constructor (
        private readonly postMemory: PostMemoryRepository
    ) {}

    async create(dto: CreatePostImageDto){
        const {userId, tags, image} = dto;
        const post = {id:'', date: dayjs().toDate(), tags, userId, state: PostState.Published, isRepost: false, commentCount: 0, likesCount: 0, repostsCount: 0, primaryAuthor:'', primaryId: '', image, images:[]};
        const postEntity = new PostImageEntity(post);
        return this.postMemory.create(postEntity);

    }
}
