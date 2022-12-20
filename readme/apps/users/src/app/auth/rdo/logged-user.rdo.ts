import { ApiProperty } from '@nestjs/swagger';
import {Expose, Transform} from 'class-transformer';

export class LoggedUserRdo {
@ApiProperty({
    description: 'The uniq user ID',
    example: '123'
})    
@Transform(({ obj }) => obj._id.toString())
@Expose({name: '_id'})
public id: string;

@ApiProperty({
    description: 'User address',
    example: 'myEmail@mail.ru'
})
@Expose()
public email: string;

@Expose()
public accessToken: string;

}