import { Body, Controller, HttpStatus,Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { UserRdo } from '../user/rdo/user.rdo';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('register')
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The new user has been successfully created.'
    })
    async create(@Body() dto: CreateUserDto) {
        return fillObject(UserRdo, await this.authService.register(dto));
    }

    @Post('login')
    @ApiResponse({
     type: LoggedUserRdo,
     status: HttpStatus.OK,
     description: 'User has been successfully logged.'
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Password or Login is wrong.',
    })
    async login(@Body() dto: LoginUserDto) {
        return fillObject(LoggedUserRdo, await this.authService.verifyUser(dto));
    }

    @Post('password')
    @ApiResponse({
     type: LoggedUserRdo,
     status: HttpStatus.OK,
     description: 'User has been successfully logged.'
    })
    @ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Password and New Password matches.',
    })
    async setNewPassword(@Body() dto: UpdateUserPasswordDto) {
        return fillObject(LoggedUserRdo, await this.authService.updateUserPassword(dto));
    }


}
