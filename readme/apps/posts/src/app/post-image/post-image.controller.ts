import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostImageDto } from '../post-image/dto/create-post-image.dto';
import { PostImageService } from '../post-image/post-image.service';

@Controller('post/image')
export class PostImageController {
    constructor(
        private readonly postImageService: PostImageService,
      ){}


    @Post()
    // @ApiResponse({
    //   status: HttpStatus.CREATED,
    //   description: 'The new comment has been successfully created.'
    // })
    async createImage (@Body() dto: CreatePostImageDto){
      return await this.postImageService.create(dto);
    }
}
