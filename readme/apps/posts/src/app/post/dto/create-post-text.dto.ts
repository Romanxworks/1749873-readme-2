import { ApiProperty } from '@nestjs/swagger';

export class CreatePostTextDto {
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
        description: 'Preview. Текст с анонсом публикации. Минимальная длина 50 символов, максимальная 255',
        required: true,
        example: 'Lorem ipsum dolor '
    })
    public preview: string;

    @ApiProperty({
        description: 'Content. Минимальная длина 100 символов, максимальная 1024 символа',
        required: true,
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    public content: string;

}