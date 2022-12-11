import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserPasswordDto {
    @ApiProperty({
        description: 'User unique email',
        example: 'myEmail@mail.ru',
      })
    public email: string;

    @ApiProperty({
        description: 'User password. Минимальная длина пароля 6 символов, максимальная 12',
        example: '123456'
      })
    public password: string;


    @ApiProperty({
        description: 'User new password. Минимальная длина пароля 6 символов, максимальная 12',
        example: '123466'
      })
    public newPassword: string;
}
