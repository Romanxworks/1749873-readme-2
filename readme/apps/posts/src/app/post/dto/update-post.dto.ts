import { ApiProperty } from '@nestjs/swagger';
import { PostState, PostType } from '@readme/shared-types';

export class UpdatePostDto {

    @ApiProperty({
        description: 'The uniq user ID',
        required: true,
        example: '123'
    })  
    public id: string;

    @ApiProperty({
        description: 'tags',
        example: ["#tags"]
    })
    public tags?: string[];

    @ApiProperty({
        description: 'Post state (published or draft)',
        example: 'published'
    })
    public state?: PostState;

    @ApiProperty({
        description: 'images',
        example: '/test-image.jpg'
    })
    public images?: string[];

    @ApiProperty({
        description: 'Title. Минимальная длина 20 символов, максимальная 50',
        example: 'Lorem ipsum dolor sit amet'
    })
    public title?: string;


    @ApiProperty({
        description: 'Preview. Текст с анонсом публикации. Минимальная длина 50 символов, максимальная 255',
        example: 'Lorem ipsum dolor '
    })
    public preview?: string;

    @ApiProperty({
        description: 'Content. Минимальная длина 100 символов, максимальная 1024 символа',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    public content?: string;

    @ApiProperty({
        description: 'Reference. Валидный URL',
        example: 'https://up.htmlacademy.ru'
    })
    public reference?: string;

    @ApiProperty({
        description: 'Description. Описание ссылки. Максимальный размер 300 символов',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    public description?: string;

    @ApiProperty({
        description: 'Максимальный размер фотографии: 1 мегабайт. Допускаются форматы: jpg, png',
        example: '/test-image.jpg'
    })
    public image?: string;

    @ApiProperty({
        description: 'Citation. Минимальная длина 20 символов, максимальная 300',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    public citation?: string;

    @ApiProperty({
        description: 'Author citation. Минимальная длина 3 символов, максимальная 50',
        example: 'Lorem Ivanov'
    })
    public author?: string;

    @ApiProperty({
        description: 'Post type (text, video, citation, reference or image)',
        example: 'image'
    })
    public type?: PostType;

    @ApiProperty({
        description: 'Link Video. Валидная ссылка на страницу с видео на сервисе YouTube.',
        example: 'https://www.youtube.com'
    })
    public linkVideo?: string;
}