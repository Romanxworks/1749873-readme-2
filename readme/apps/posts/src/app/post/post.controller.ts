import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { CreatePostCitationDto } from './dto/create-post-citation.dto';
import { CreatePostImageDto } from './dto/create-post-image.dto';
import { CreatePostReferenceDto } from './dto/create-post-reference.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService,
      ){}

    @Get()
    // @ApiResponse({
    //   type: CommentRdo,
    //   status: HttpStatus.OK,
    //   description: 'Coments found'
    // })
    async show (){
      return await this.postService.getPosts();
    }
    
    @Get(':id')
    async showPost (@Param('id') id: string){
        return await this.postService.getPost(id);
    }

    @Get('users/:userId')
    async showByUser (@Param('userId') id: string){
        return await this.postService.getPostsByUser(id);
    }

    @Patch(':id')
    async updatePost (@Param('id') id: string, @Body() dto: PostEntity){
      return await this.postService.updatePost(id, dto);
    }

    @Delete(':id')
    async deletePost (@Param('id') id: string){
      return await this.postService.deletePost(id);
    }

    @Post('repost/:id')
    async repost (@Body() dto:UpdatePostDto, @Param('id') postId: string){
      return await this.postService.repost(dto.userId, postId);
    }

    @Post('image')
    // @ApiResponse({
    //   status: HttpStatus.CREATED,
    //   description: 'The new comment has been successfully created.'
    // })
    async createImage (@Body() dto: CreatePostImageDto){
      return await this.postService.createImage(dto);
    }

    @Post('citation')
    // @ApiResponse({
    //   status: HttpStatus.CREATED,
    //   description: 'The new comment has been successfully created.'
    // })
    async createCitation (@Body() dto: CreatePostCitationDto){
      return await this.postService.createCitation(dto);
    }

    @Post('reference')
    // @ApiResponse({
    //   status: HttpStatus.CREATED,
    //   description: 'The new comment has been successfully created.'
    // })
    async createReference (@Body() dto: CreatePostReferenceDto){
      return await this.postService.createReference(dto);
    }

    @Post('video')
    // @ApiResponse({
    //   status: HttpStatus.CREATED,
    //   description: 'The new comment has been successfully created.'
    // })
    async createVideo (@Body() dto: CreatePostVideoDto){
      return await this.postService.createVideo(dto);
    }

    @Post('text')
    // @ApiResponse({
    //   status: HttpStatus.CREATED,
    //   description: 'The new comment has been successfully created.'
    // })
    async createText (@Body() dto: CreatePostTextDto){
      return await this.postService.createText(dto);
    }
}
