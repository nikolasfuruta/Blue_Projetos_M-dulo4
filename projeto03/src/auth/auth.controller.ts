/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Login para gerar Token' })
  @ApiBody(
    {
      schema:{
        properties:{
          nome: { example: "nikolas" },
          senha: { example: "nikolas123" },
        }
      }
    }
  )
  @ApiCreatedResponse({description: 'TOKEN GERADO'})
  @ApiBadRequestResponse({ description: 'TOKEN NÃO GERADO' })
  async login(@Body() info: LoginDto) {
    return this.authService.login(info);
  }

  @Get()
  @ApiOperation({ summary: 'Verificação do Login' })
  @ApiOkResponse({ schema: { example: 'LOGADO' } })
  @ApiBadRequestResponse({ description: 'NÃO LOGADO' })
  @UseGuards(AuthGuard())
  async checkLogin() {
    return 'LOGADO';
  }
}
