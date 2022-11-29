import { Injectable } from '@nestjs/common';
import { CommentInterface } from '@readme/shared-types';
import { CommentEntity } from './comment.entity';
import * as crypto from 'crypto';

@Injectable()
export class CommentMemoryRepository {
    private repository: {[key:string]: CommentInterface} = {};

    public async create(item:CommentEntity): Promise<CommentInterface> {
        const entry = {...item.toObject(), id: crypto.randomUUID()}
        this.repository[entry.id] = entry;
        return {...entry};
    }

    public async deleteByPostId(postId: string): Promise<void> {
         Object.values(this.repository)
        .filter((commentItem) => commentItem.postId !== postId);

    }

    public async findByPostId(postId: string): Promise<CommentInterface[]> {

        const commentByPost = Object.values(this.repository)
            .filter((commentItem) => commentItem.postId === postId);
  
        if (commentByPost.length === 0) {
            return null;
        }
  
      return commentByPost;
    }

}