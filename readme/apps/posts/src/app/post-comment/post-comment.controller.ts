import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { PostCommentService } from './post-comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { fillObject } from '@readme/core';
import {CommentRdo} from './rdo/post-comment.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class PostCommentController {
  constructor(
    private readonly commentService: PostCommentService
  ){}
    
    @Post()
    @ApiResponse({
      status: HttpStatus.CREATED,
      description: 'The new comment has been successfully created.'
    })
    async create (@Body() dto: CreateCommentDto){
      return fillObject(CommentRdo, await this.commentService.create(dto));
    }

    @Get(':postId')
    @ApiResponse({
      type: CommentRdo,
      status: HttpStatus.OK,
      description: 'Coments found'
    })
    async show (@Param('postId') id: string){
      const postId = parseInt(id, 10);
      return fillObject(CommentRdo, await this.commentService.getComments(postId));
    }

    @Delete(':postId')
    @ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'The comments has been deleted.'
    })
    async delete (@Param('postId') id: string){
      const postId = parseInt(id, 10);
      return fillObject(CommentRdo, await this.commentService.deleteByPost(postId));
    }
}
