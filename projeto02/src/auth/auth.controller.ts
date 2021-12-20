import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() info: LoginDto) {
    return this.authService.login(info);
  }

  @Get()
  @UseGuards(AuthGuard())
  async checkLogin() {
    return 'LOGADO';
  }
}
