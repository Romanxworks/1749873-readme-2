import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty({
        description: 'User unique email',
        example: 'myEmail@mail.ru',
      })
    public email: string;

    @ApiProperty({
        description: 'User password',
        example: '123456'
      })
    public password: string;
}
