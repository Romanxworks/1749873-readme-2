import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
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

    // @Post('repost/:id')
    // async repost (@Body() userId:string, @Param('id') postId: string){
    //   return await this.postService.repost(userId, postId);
    // }
}
