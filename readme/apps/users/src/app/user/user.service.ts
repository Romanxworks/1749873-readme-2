import { Injectable } from '@nestjs/common';
import { AUTH_USER_NOT_FOUND } from '../auth/auth.constant';
import { UserMemoryRepository } from './user-memory.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly userMemory: UserMemoryRepository
    ){}

    async addDeletePost(userId: string, postId: string, type: string) {
      const existUser = await this.userMemory.findById(userId);
      const isAdd = Boolean(Number(type));
  
      console.log(isAdd);
      if (!existUser) {
        throw new Error(AUTH_USER_NOT_FOUND);
      }
      const posts = existUser.posts;
      const srtpost = String(postId);
      if(isAdd){
        existUser.posts.push(postId);
      }else{
        // console.log(typeof postId);
        // console.log(existUser.posts[0] === postId);
        existUser.posts.filter((postsId) => postsId !== srtpost);
        posts.filter((postsId) => postsId !== srtpost);
        console.log(existUser);
      }

      
      const userEntity = new UserEntity(existUser);
      
      return this.userMemory.update(existUser._id, userEntity);

    }

    async addDeleteLike(userId: string, postId: string) {
        const existUser = await this.userMemory.findById(userId);
    
        if (!existUser) {
          throw new Error(AUTH_USER_NOT_FOUND);
        }
  
        existUser.likes.push(postId);
        const userEntity = new UserEntity(existUser);
        
        return this.userMemory.update(existUser._id, userEntity);
  
    }

    async addDeleteSubscribe(userId: string, subscribeId: string) {
        const existUser = await this.userMemory.findById(userId);
    
        if (!existUser) {
          throw new Error(AUTH_USER_NOT_FOUND);
        }
  
        existUser.subscriptions.push(subscribeId);
        const userEntity = new UserEntity(existUser);
        
        return this.userMemory.update(existUser._id, userEntity);
  
    }

    async getUser(id: string) {
        return this.userMemory.findById(id);
    }
}
