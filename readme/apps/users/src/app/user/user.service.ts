import { Injectable } from '@nestjs/common';
import { AuthUserMessage } from '../auth/auth.constant';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userMemory: UserRepository
    ){}

    async addDeletePost(userId: string, postId: string, isAdd: boolean) {
      const existUser = await this.userMemory.findById(userId);
  
      if (!existUser) {
        throw new Error(AuthUserMessage.AuthUserNotFound);
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
          throw new Error(AuthUserMessage.AuthUserNotFound);
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

    async addDeleteSubscribe(userId: string, subscribeId: string, isAdd: boolean) {
        const existUser = await this.userMemory.findById(userId);
    
        if (!existUser) {
          throw new Error(AuthUserMessage.AuthUserNotFound);
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
      const existUser = await this.userMemory.findById(id);
  
      if (!existUser) {
        throw new Error(AuthUserMessage.AuthUserNotFound);
      }
      
        return this.userMemory.findById(id);
    }
}
