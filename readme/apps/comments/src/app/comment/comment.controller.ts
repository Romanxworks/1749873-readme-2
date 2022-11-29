import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { fillObject } from '@readme/core';
import {CommentRdo} from './rdo/comment.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ){}
    
    @Post()
    @ApiResponse({
      status: HttpStatus.CREATED,
      description: 'The new comment has been successfully created.'
    })
    async create (@Body() dto: CreateCommentDto){
      return fillObject(CommentRdo, await this.commentService.create(dto));
    }

    @Get(':id')
    @ApiResponse({
      type: CommentRdo,
      status: HttpStatus.OK,
      description: 'Coments found'
    })
    async show (@Param('id') id: string){
      return fillObject(CommentRdo, await this.commentService.getComments(id));
    }

    @Delete(':id')
    @ApiResponse({
      status: HttpStatus.OK,
      description: 'The  comment has been deleted.'
    })
    async delete (@Param('id') id: string){
      return fillObject(CommentRdo, await this.commentService.delete(id));
    }
}
