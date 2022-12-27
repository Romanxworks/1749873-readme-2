import { ApiProperty } from '@nestjs/swagger';
import { PostState, PostType } from '@readme/shared-types';
import { Expose } from 'class-transformer';

export class PostRdo {
    @ApiProperty({
        description: 'The uniq post ID',
        example: '13d3-ewr1'
    })
    @Expose()
    public id: string;

    @ApiProperty({
        description: 'The uniq user ID',
        example: '13d3'
    })
    @Expose()
    public userId: string;

    @ApiProperty({
        description: 'Publication date (ISO format)',
        example: '2021-03-09'
    })
    @Expose()
    public date: Date;

    @ApiProperty({
        description: 'Post state (published or draft)',
        example: 'published'
    })
    @Expose()
    public state: PostState;

    @ApiProperty({
        description: 'tags',
        example: ['#tags']
    })
    @Expose()
    public tags: string[];

    @ApiProperty({
        description: 'comments',
        example: ['commentId']
    })
    @Expose()
    public comments: string[]

    @ApiProperty({
        description: 'images',
        example: ['/test-image.jpg']
    })
    @Expose()
    public images: string[];

    @ApiProperty({
        description: 'Repost status',
        example: 'false'
    })
    @Expose()
    public isRepost: boolean;

    @ApiProperty({
        description: 'primary id after repost',
        example: '3d3-ewr1'
    })
    @Expose()
    public primaryId: string;

    @ApiProperty({
        description: 'primary User id after repost',
        example: '3d3'
    })
    @Expose()
    public primaryAuthor: string;

    @ApiProperty({
        description: 'likes counts',
        example: '20'
    })
    @Expose()
    public likesCount: number;

    @ApiProperty({
        description: 'reposts counts',
        example: '20'
    })
    @Expose()
    public repostsCount: number;

    @ApiProperty({
        description: 'comments counts',
        example: '20'
    })
    @Expose()
    public commentCount: number;

    @ApiProperty({
        description: 'Post type (text, video, citation, reference or image)',
        example: 'image'
    })
    @Expose()
    public type: PostType;

    @ApiProperty({
        description: 'Citation.',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    @Expose()
    public citation: string;

    @ApiProperty({
        description: 'Author citation.',
        example: 'Lorem Ivanov'
    })
    @Expose()
    public author: string;

    @ApiProperty({
        description: ' Допускаются форматы: jpg, png',
        example: '/test-image.jpg'
    })
    @Expose()
    public image: string;

    @ApiProperty({
        description: 'Reference. Валидный URL',
        example: 'https://up.htmlacademy.ru'
    })
    @Expose()
    public reference: string;

    @ApiProperty({
        description: 'Description.',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    @Expose()
    public description: string;

    @ApiProperty({
        description: 'Title. ',
        example: 'Lorem ipsum dolor sit amet'
    })
    @Expose()
    public title: string;

    @ApiProperty({
        description: 'Preview. Текст с анонсом публикации',
        example: 'Lorem ipsum dolor '
    })
    @Expose()
    public preview: string;

    @ApiProperty({
        description: 'Content.',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    @Expose()
    public content: string;

    @ApiProperty({
        description: 'Link Video.',
        example: 'https://www.youtube.com'
    })
    @Expose()
    public linkVideo: string;
}