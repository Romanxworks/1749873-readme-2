import {CRUDRepositoryInterface} from '@readme/core';
import { PostInterface } from '@readme/shared-types';
import { PostEntity } from './post.entity';
import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostMemoryRepository implements CRUDRepositoryInterface<PostEntity, string, PostInterface> { 
    private repository: {[key: string]: PostInterface} = {};
    
    public async findById(id: string): Promise<PostInterface> {
        if (this.repository[id]) {
            return {...this.repository[id]};
        }
        return null;
    }

    public async create(post: PostEntity): Promise<PostInterface> {
        const entry = {...post.toObject(), id: crypto.randomUUID()}
        this.repository[entry.id] = entry;
        return {...entry};
    }

    public async update(id: string, item: PostEntity): Promise<PostInterface> {
        this.repository[id] = {...item.toObject(), id: id};
        return this.findById(id);
    }

    public async destroy(id: string): Promise<void> {
        delete this.repository[id];
    }

    public async show(): Promise< PostInterface[]> {
       return Object.values(this.repository);
    }



    public async findByUser(userId: string): Promise<PostInterface[] | null> {
        const existPost = Object.values(this.repository)
          .filter((postItem) => postItem.userId === userId);
        console.log(userId);
        console.log(existPost);
    
        return existPost;
      }

}