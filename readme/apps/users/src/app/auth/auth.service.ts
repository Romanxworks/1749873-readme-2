import { Injectable } from '@nestjs/common';
import { UserMemoryRepository } from '../user/user-memory.repository';
import { UserEntity } from '../user/user.entity';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './auth.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
    constructor (
        private readonly userMemory: UserMemoryRepository
    ) {}

    async register (dto: CreateUserDto) {
        const {email, name, password} = dto;
        const user = {_id:'', email, name, passwordHash: '', avatar: '', likes: [], posts: []};

        const existUser = await this.userMemory
        .findByEmail(email);
        if (existUser) {
        throw new Error(AUTH_USER_EXISTS);
        }

        const userEntity = await new UserEntity(user)
        .setPassword(password)
  
        return this.userMemory
        .create(userEntity);
    }

    async verifyUser(dto: LoginUserDto) {
        const {email, password} = dto;
        const existUser = await this.userMemory.findByEmail(email);
    
        if (!existUser) {
          throw new Error(AUTH_USER_NOT_FOUND);
        }
    
        const userEntity = new UserEntity(existUser);
        if (! await userEntity.comparePassword(password)) {
          throw new Error(AUTH_USER_PASSWORD_WRONG);
        }
    
        return userEntity.toObject();
      }
    
    async getUser(id: string) {
        return this.userMemory.findById(id);
    }
    
}