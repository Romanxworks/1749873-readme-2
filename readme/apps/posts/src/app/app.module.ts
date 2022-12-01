import { Module } from '@nestjs/common';
import { PostImageModule } from './post-image/post-image.module';
import { PostModule } from './post/post.module';


@Module({
  imports: [PostModule, PostImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
