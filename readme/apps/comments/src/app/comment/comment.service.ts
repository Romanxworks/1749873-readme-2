import { Injectable } from '@nestjs/common';
import { CommentMemoryRepository } from './comment-memory.repository';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class CommentService {
    constructor (
        private readonly commentMemory: CommentMemoryRepository
    ) {}

    async create(dto: CreateCommentDto){
        const {content, userId, postId} = dto;
        const comment = {id:'', date: dayjs().toDate(), content, userId, postId};
        const commentEntity = new CommentEntity(comment);
        return this.commentMemory.create(commentEntity);

    }

    async getComments (postId: string){
        return this.commentMemory.findByPostId(postId);
    }

    async delete (id: string){
        return this.commentMemory.destroy(id);
    }
}
