import { ApiProperty } from '@nestjs/swagger';

export class CreatePostVideoDto {
    @ApiProperty({
        description: 'User id',
        required: true,
        example: '1e3r4t45'
    })

    public userId: string;

    @ApiProperty({
        description: 'tags',
        example: '[#tags]'
    })
    public tags: string[];

    @ApiProperty({
        description: 'Title. Минимальная длина 20 символов, максимальная 50',
        required: true,
        example: 'Lorem ipsum dolor sit amet'
    })
    public title: string;

    @ApiProperty({
        description: 'Link Video. Валидная ссылка на страницу с видео на сервисе YouTube.',
        required: true,
        example: 'https://www.youtube.com'
    })
    public linkVideo: string;

}