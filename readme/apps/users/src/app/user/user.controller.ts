import { Body, Controller, Get, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { AddDeleteDto } from './dto/add-delete.dto';
import { UserRdo } from './rdo/user.rdo';
import { UserService } from './user.service';

@ApiTags('users')
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
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'post has been added'
    })
    async addPost(@Body() dto: AddDeleteDto, @Param('id') postId: string) {
        const {userId, isAdd} = dto;
        const isAddDelete = Boolean(Number(isAdd));
      return  await this.userService.addDeletePost(userId, postId, isAddDelete);
    }

    @Patch('like/:id')
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'like has been added'
    })
    async addLike(@Body() dto: AddDeleteDto, @Param('id') postId: string) {
        const {userId, isAdd} = dto;
        const isAddDelete = Boolean(Number(isAdd));
      return  await this.userService.addDeleteLike(userId, postId, isAddDelete);
    }

    @Patch('subscribe/:id')
    @ApiResponse({
        type: UserRdo,
        status: HttpStatus.OK,
        description: 'subscribe has been added'
    })
    async addSubscribe(@Body() dto: AddDeleteDto, @Param('id') subscribeId: string) {
        const {userId, isAdd} = dto;
        const isAddDelete = Boolean(Number(isAdd));
      return  await this.userService.addDeleteSubscribe(userId, subscribeId, isAddDelete);
    }
}
