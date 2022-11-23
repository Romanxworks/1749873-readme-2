import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'User unique address',
        example: 'myEmail@mail.ru'
      })
    public email: string;

    @ApiProperty({
        description: 'User name',
        example: 'User'
      })
    public name: string;

    @ApiProperty({
        description: 'User password',
        example: '123456'
      })
    public password: string;
}