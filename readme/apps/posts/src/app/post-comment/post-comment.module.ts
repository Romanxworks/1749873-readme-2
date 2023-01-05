import { Module } from '@nestjs/common';
import { PostCommentRepository } from './post-comment.repository';
import { PostCommentService } from './post-comment.service';
import { PostCommentController } from './post-comment.controller';

@Module({
    imports: [],
    controllers: [PostCommentController],
    providers: [PostCommentService, PostCommentRepository],
    exports: [PostCommentRepository]
})
export class PostCommentModule {}
