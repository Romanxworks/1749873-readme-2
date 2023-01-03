import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostCommentModule } from './post-comment/post-comment.module';
import { PostTagModule } from './post-tag/post-tag.module';

@Module({
  imports: [PostModule, PrismaModule, PostCommentModule, PostTagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
