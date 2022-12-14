import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { UserMemoryRepository } from '../user/user-memory.repository';
import { UserEntity } from '../user/user.entity';
import { AuthUserMessage } from './auth.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@Injectable()
export class AuthService {
    constructor (
        private readonly userMemory: UserMemoryRepository,

    // @Inject(databaseConfig.KEY)
    // private readonly mongoConfig: ConfigType<typeof databaseConfig>,
    ) {
      // console.log(mongoConfig.password);
    }

    async register (dto: CreateUserDto) {
        const {email, name, password} = dto;
        const user = {_id:'', email, name, passwordHash: '', avatar: '', likes: [], posts: [], subscriptions: [], date: dayjs().toDate(),};

        const existUser = await this.userMemory
        .findByEmail(email);
        if (existUser) {
        throw new Error(AuthUserMessage.AuthUserExists);
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
          throw new Error(AuthUserMessage.AuthUserNotFound);
        }
    
        const userEntity = new UserEntity(existUser);
        if (! await userEntity.comparePassword(password)) {
          throw new Error(AuthUserMessage.AuthUserPasswordWrong);
        }
    
        return userEntity.toObject();
      }
    

    async updateUserPassword(dto: UpdateUserPasswordDto) {
      const {email, password, newPassword} = dto;
      const existUser = await this.userMemory.findByEmail(email);
  
      if (!existUser) {
        throw new Error(AuthUserMessage.AuthUserNotFound);
      }
  
      const userEntity = new UserEntity(existUser);
      if (! await userEntity.comparePassword(password)) {
        throw new Error(AuthUserMessage.AuthUserPasswordWrong);
      }

      if (await userEntity.comparePassword(newPassword)) {
        throw new Error(AuthUserMessage.AuthUserNewPasswordWrong);
      }

      await userEntity.setPassword(newPassword);

      return this.userMemory
        .update(existUser._id, userEntity);

    }

  
    
}