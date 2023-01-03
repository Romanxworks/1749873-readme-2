import { Module } from '@nestjs/common';
import { PostTagRepository } from './post-tag.repository';
import { PostTagService } from './post-tag.service';

@Module({    
    imports: [],
    controllers: [],
    providers: [PostTagService, PostTagRepository],
    exports: [PostTagRepository],})
export class PostTagModule {}
