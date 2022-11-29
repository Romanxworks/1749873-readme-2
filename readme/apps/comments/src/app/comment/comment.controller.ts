import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { fillObject } from '@readme/core';
import {CommentRdo} from './rdo/comment.rdo';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ){}
    
    @Post()
    async create (@Body() dto: CreateCommentDto){
      return fillObject(CommentRdo, await this.commentService.create(dto));
    }
    
    @Get(':id')
    async show(@Param('id') id: string){
      return  await this.commentService.getComments(id);
    }
}
