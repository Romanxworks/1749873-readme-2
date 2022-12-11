import { ApiProperty } from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class CommentRdo {

    @ApiProperty()
    @Expose()
    public id: string;

    @ApiProperty()
    @Expose()
    public date: Date;

    @ApiProperty()
    @Expose()
    public content: string;

    @ApiProperty()
    @Expose()
    public userId: string;

}