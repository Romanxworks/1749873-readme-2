import { Injectable } from '@nestjs/common';
import { PostCommentRepository } from './post-comment.repository';
import { PostCommentEntity } from './post-comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
import { CommentInterface } from '@readme/shared-types';
@Injectable()
export class PostCommentService {
    constructor (
        private readonly commentMemory: PostCommentRepository
    ) {}

    async create(dto: CreateCommentDto): Promise<CommentInterface>{
        const commentEntity = new PostCommentEntity(dto);
        return this.commentMemory.create(commentEntity);

    }

    async getComments (postId: number): Promise<CommentInterface[]>{
        return this.commentMemory.findByPostId(postId);
    }

    async delete (id: number){
        return this.commentMemory.destroy(id);
    }


    async deleteByPost (postId: number){
        return this.commentMemory.deleteByPostId(postId);
    }
}
