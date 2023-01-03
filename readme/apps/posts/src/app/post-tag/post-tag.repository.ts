import { CRUDRepositoryInterface } from '@readme/core';
import { PostTagEntity } from './post-tag.entity';
import { TagsInterface } from '@readme/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostTagRepository implements CRUDRepositoryInterface<PostTagEntity, number, TagsInterface> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: PostTagEntity): Promise<TagsInterface> {
    return this.prisma.tag.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.tag.delete({
      where: {
       id,
      }
    });
  }

  public findById(id: number): Promise<TagsInterface | null> {
    return this.prisma.tag.findFirst({
      where: {
        id
      }
    });
  }

  public find(ids: number[] = []): Promise<TagsInterface[]> {
    return this.prisma.tag.findMany({
      where: {
        id: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(id: number, item: PostTagEntity): Promise<TagsInterface> {
    return this.prisma.tag.update({
      where: {
        id
      },
      data: { ...item.toObject(), id}
    });
  }
}