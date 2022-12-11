import { Injectable } from '@nestjs/common';
import { AUTH_USER_NOT_FOUND } from '../auth/auth.constant';
import { UserMemoryRepository } from './user-memory.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly userMemory: UserMemoryRepository
    ){}

    async addDeletePost(userId: string, postId: string, isAdd: boolean) {
      const existUser = await this.userMemory.findById(userId);
  
      if (!existUser) {
        throw new Error(AUTH_USER_NOT_FOUND);
      }
      
      if(isAdd){
        existUser.posts.push(postId);
        const userEntity = new UserEntity(existUser);
        return this.userMemory.update(existUser._id, userEntity);
      }

      const User = {...existUser, posts:existUser.posts.filter((postsId) => postsId !== postId)};
      const userEntity = new UserEntity(User);
      return this.userMemory.update(existUser._id, userEntity);

    }

    async addDeleteLike(userId: string, postId: string, isAdd: boolean) {
        const existUser = await this.userMemory.findById(userId);
    
        if (!existUser) {
          throw new Error(AUTH_USER_NOT_FOUND);
        }

        if(isAdd){
          existUser.likes.push(postId);
          const userEntity = new UserEntity(existUser);
          return this.userMemory.update(existUser._id, userEntity);
        }
  
        const User = {...existUser, likes:existUser.likes.filter((postsId) => postsId !== postId)};
        const userEntity = new UserEntity(User);
        return this.userMemory.update(existUser._id, userEntity);
  
    }

    async addDeleteSubscribe(userId: string, subscribeId: string, isAdd) {
        const existUser = await this.userMemory.findById(userId);
    
        if (!existUser) {
          throw new Error(AUTH_USER_NOT_FOUND);
        }

        if(isAdd){
          existUser.subscriptions.push(subscribeId);
          const userEntity = new UserEntity(existUser);
          return this.userMemory.update(existUser._id, userEntity);
        }
  
        const User = {...existUser, subscriptions: existUser.subscriptions.filter((userId) => userId !== subscribeId)};
        const userEntity = new UserEntity(User);
        return this.userMemory.update(existUser._id, userEntity);
  
    }

    async getUser(id: string) {
        return this.userMemory.findById(id);
    }
}
