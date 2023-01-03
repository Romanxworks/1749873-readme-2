import { TagsInterface } from '@readme/shared-types';

export class PostTagEntity implements TagsInterface {
  public id: number;
  public title: string;

  constructor(tag: TagsInterface) {
    this.fillEntity(tag);
  }

  public fillEntity(tag: TagsInterface) {
    this.title = tag.title;
    this.id = tag.id;
  }

  public toObject(): PostTagEntity {
    return { ...this }
  }
}