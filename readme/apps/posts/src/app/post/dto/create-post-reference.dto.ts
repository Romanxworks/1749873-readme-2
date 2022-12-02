import { ApiProperty } from '@nestjs/swagger';

export class CreatePostReferenceDto {
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
        description: 'Reference. Валидный URL',
        required: true,
        example: 'https://up.htmlacademy.ru'
    })
    public reference: string;

    @ApiProperty({
        description: 'Description. Описание ссылки. Максимальный размер 300 символов',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    public description: string;

}