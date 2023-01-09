import {CRUDRepositoryInterface} from '@readme/core';
import { PostInterface } from '@readme/shared-types';
import { PostEntity } from './post.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostRepository implements CRUDRepositoryInterface<PostEntity, number, PostInterface> { 
  
    constructor(private readonly prisma: PrismaService) {}

    public async create(post: PostEntity): Promise<PostInterface> {
        const entry = post.toObject();
        return this.prisma.post.create({
              data: {
               ...entry,
               tags: {
                  connect: [...entry.tags]
               },
               comments: {
                  connect: []
               }
              },
              include: {
                tags: true,
                comments: true,
              }
          });
    }
    
    public async findById(id: number): Promise<PostInterface> {
        return this.prisma.post.findFirst({
            where: {
              id
            },
            include: {
              comments: true,
              tags: true,
            }
          });

    }

    public async update(id: number, item: PostEntity): Promise<PostInterface> {
        return Promise.resolve(undefined);
    }

    public async destroy(id: number): Promise<void> {
        await this.prisma.post.delete({
            where: {
              id,
            }
          });
    }

    public async getPosts(): Promise<PostInterface[]> {
        return this.prisma.post.findMany({
            include: {
              comments: true,
              tags: true
            }
          });
    }



    // public async findByUser(userId: string): Promise<PostInterface[] | null> {

    // }

    // public async repost (userId: string, postId: string): Promise<PostInterface>{

    // }


}