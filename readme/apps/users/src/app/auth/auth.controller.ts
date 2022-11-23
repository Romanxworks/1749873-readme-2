import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { UserRdo } from './rdo/user.rdo';

@ApiTags('auth')
@ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
})
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('register')
    async create(@Body() dto: CreateUserDto) {
        return fillObject(UserRdo, await this.authService.register(dto));
    }

    @Post('login')
    @ApiResponse({
        type: LoggedUserRdo,
    })
    async login(@Body() dto: LoginUserDto) {
        return fillObject(LoggedUserRdo, await this.authService.verifyUser(dto));
    }

    @Get(':id')
    @ApiResponse({
        type: UserRdo,
    })
    async show(@Param('id') id: string) {
      return fillObject(UserRdo, await this.authService.getUser(id));
    }

}
