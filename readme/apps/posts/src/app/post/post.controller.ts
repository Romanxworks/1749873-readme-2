import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { CreatePostCitationDto } from './dto/create-post-citation.dto';
import { CreatePostImageDto } from './dto/create-post-image.dto';
import { CreatePostReferenceDto } from './dto/create-post-reference.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';
import { PostRdo } from './rdo/post.rdo';
@ApiTags('post')
@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService,
      ){}

    @Get()
    @ApiResponse({
      type: [PostRdo],
      status: HttpStatus.OK,
      description: 'Post'
    })
    async show (){
       return fillObject(PostRdo, await this.postService.getPosts());
    }
    
    @Get(':id')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.OK,
      description: 'Post'
    })
    async showPost (@Param('id') id: string){
        return fillObject(PostRdo, await this.postService.getPost(id));
    }

    @Get('users/:userId')
    @ApiResponse({
      type: [PostRdo],
      status: HttpStatus.OK,
      description: 'Post by user'
    })
    async showByUser (@Param('userId') id: string){
        return fillObject(PostRdo, await this.postService.getPostsByUser(id));
    }

    @Patch(':id')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.CREATED,
      description: 'Post'
    })
    async updatePost (@Param('id') id: string, @Body() dto: PostEntity){
      return fillObject(PostRdo, await this.postService.updatePost(id, dto));
    }

    @Delete(':id')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.OK,
      description: 'Post has been delete'
    })
    async deletePost (@Param('id') id: string){
      return await this.postService.deletePost(id);
    }

    @Post('repost/:id')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.CREATED,
      description: 'Post has been repost'
    })
    async repost (@Body() dto:UpdatePostDto, @Param('id') postId: string){
      return fillObject(PostRdo, await this.postService.repost(dto.userId, postId));
    }

    @Post('image')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.CREATED,
      description: 'Post image has been created'
    })
    async createImage (@Body() dto: CreatePostImageDto){
      return fillObject(PostRdo, await this.postService.createImage(dto));
    }

    @Post('citation')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.CREATED,
      description: 'Post citation has been created'
    })
    async createCitation (@Body() dto: CreatePostCitationDto){
      return fillObject(PostRdo, await this.postService.createCitation(dto));
    }

    @Post('reference')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.CREATED,
      description: 'Post reference has been created'
    })
    async createReference (@Body() dto: CreatePostReferenceDto){
      return fillObject(PostRdo, await this.postService.createReference(dto));
    }

    @Post('video')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.CREATED,
      description: 'Post video has been created'
    })
    async createVideo (@Body() dto: CreatePostVideoDto){
      return fillObject(PostRdo, await this.postService.createVideo(dto));
    }

    @Post('text')
    @ApiResponse({
      type: PostRdo,
      status: HttpStatus.CREATED,
      description: 'Post text has been created'
    })
    async createText (@Body() dto: CreatePostTextDto){
      return fillObject(PostRdo, await this.postService.createText(dto));
    }
}
