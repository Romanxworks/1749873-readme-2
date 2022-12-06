import { ApiProperty } from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class UserRdo {
@ApiProperty({
    description: 'The uniq user ID',
    example: '123'
})  
@Expose({name: '_id'})
public id: string;

@ApiProperty({
    description: 'User registered date(ISO format)',
    example: '2021-03-09'
})
@Expose()
public date: string;

@ApiProperty({
    description: 'User address',
    example: 'myEmail@mail.ru'
})
@Expose()
public email: string;

@ApiProperty({
    description: 'User name',
    example: 'User'
})
@Expose()
public name: string;

@ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
})
@Expose()
public avatar: string;

@Expose()
public likes: string[];

@Expose()
public posts: string[];

@Expose()
public subscriptions: string[];

}