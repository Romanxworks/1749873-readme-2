import { ApiProperty } from '@nestjs/swagger';

export class CreatePostImageDto {

    @ApiProperty({
        description: 'Максимальный размер фотографии: 1 мегабайт. Допускаются форматы: jpg, png',
        required: true,
        example: '/test-image.jpg'
    })
    public image: string;

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
}