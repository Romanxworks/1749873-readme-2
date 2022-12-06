import { Body, Controller, Get, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { AddPostDto } from './dto/add-post.dto';
import { UserRdo } from './rdo/user.rdo';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor (
        private readonly userService: UserService
    ){}


    @Get(':id')
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'User found'
    })
    async show(@Param('id') id: string) {
      return fillObject(UserRdo, await this.userService.getUser(id));
    }


    @Patch('post/:id')
    // @ApiResponse({
    //     type: UserRdo,
    //     status: HttpStatus.OK,
    //     description: 'User found'
    // })
    async addPost(@Body() dto: AddPostDto, @Param('id') postId: string) {
        const {userId, type} = dto;
      return  await this.userService.addDeletePost(userId, postId, type);
    }
}
