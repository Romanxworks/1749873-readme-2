import { Module } from '@nestjs/common';
import { PostModule } from '../post/post.module';
import { PostImageController } from './post-image.controller';
import { PostImageService } from './post-image.service';

@Module({
  imports: [PostModule],
  controllers: [PostImageController],
  providers: [PostImageService],
  exports: [PostImageService],
})
export class PostImageModule {}
