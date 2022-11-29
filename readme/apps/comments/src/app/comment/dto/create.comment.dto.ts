import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty({
        description: 'Минимальная длина: 10 символов, максимальная: 300',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
      })
    public content: string;

    @ApiProperty({
        description: 'id user',
        example: '1233654'
      })
    public userId: string;

    @ApiProperty({
        description: 'id post',
        example: '1233654'
      })
    public postId: string;

}