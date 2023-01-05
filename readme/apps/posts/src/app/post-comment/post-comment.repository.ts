import { Injectable } from '@nestjs/common';
import { CommentInterface } from '@readme/shared-types';
import { PostCommentEntity } from './post-comment.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostCommentRepository {
    constructor(private readonly prisma: PrismaService) {}

    public async create(item:PostCommentEntity): Promise<CommentInterface> {
      return this.prisma.comment.create({
      data: { ...item.toObject() }
      });
    }

    public async deleteByPostId(postId: number): Promise<void> {
        await this.prisma.comment.deleteMany({
           where: {
            postId,
        }
        });

    }

    public async destroy(id: number): Promise<void> {
        await this.prisma.comment.delete({
            where: {
                id,
            }
         });
    }

    public async findByPostId(postId: number): Promise<CommentInterface[]> {
        return this.prisma.comment.findMany({
            where: {
                postId,
            } 
        })
    }

}