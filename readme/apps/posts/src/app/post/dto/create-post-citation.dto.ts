import { ApiProperty } from '@nestjs/swagger';

export class CreatePostCitationDto {
    @ApiProperty({
        description: 'User id',
        required: true,
        example: '1e3r4t45'
    })
    public userId!: string;

    @ApiProperty({
        description: 'tags',
        example: '[#tags]'
    })
    public tags: string[];

    @ApiProperty({
        description: 'Citation. Минимальная длина 20 символов, максимальная 300',
        required: true,
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
    public citation: string;

    @ApiProperty({
        description: 'Author citation. Минимальная длина 3 символов, максимальная 50',
        required: true,
        example: 'Lorem Ivanov'
    })
    public author: string;

}