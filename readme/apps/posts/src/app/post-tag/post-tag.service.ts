import { TagsInterface } from '@readme/shared-types';
import { Injectable } from '@nestjs/common';
import { PostTagRepository } from './post-tag.repository';
import { CreateTagDto } from './dto/create-tag.dto';
import { PostTagEntity } from './post-tag.entity';

@Injectable()
export class PostTagService {
  constructor(
    private readonly postTagRepository: PostTagRepository
  ) {}

  async createTag(dto: CreateTagDto): Promise<TagsInterface> {
    const postTagEntity = new PostTagEntity(dto);
    return this.postTagRepository.create(postTagEntity);
  }

  async deleteTag(id: number): Promise<void> {
    this.postTagRepository.destroy(id);
  }

  async getTag(id: number): Promise<TagsInterface> {
    return this.postTagRepository.findById(id);
  }

  async getTags(): Promise<TagsInterface[]> {
    return this.postTagRepository.find();
  }

  async updateTag(id: number, dto: CreateTagDto): Promise<TagsInterface> {
    return this.postTagRepository.update(id, new PostTagEntity(dto));
  }
}