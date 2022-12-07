import { ApiProperty } from '@nestjs/swagger';

export class AddDeleteDto{
    @ApiProperty({
        description: 'User id',
        example: '1878adas-das6'
      })
    userId: string;

    @ApiProperty({
        description: 'Flag add(1) or delete(0)',
        example: '0'
      })
    isAdd: string;
}