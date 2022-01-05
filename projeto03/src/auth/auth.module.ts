/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioService } from 'src/api/usuario/usuario.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsuarioModule } from 'src/api/usuario/usuario.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    UsuarioModule,
    PassportModule.register(
      {
        defaultStrategy: "jwt",
        property:"usuario",
        session: false,
      }
    ),
    JwtModule.register(
      {
        secret: process.env.SECRETKEY,
        signOptions: { 
          expiresIn: process.env.EXPIRESIN
        },
      }
    ),
  ],
  controllers: [AuthController],
  providers: [UsuarioService, AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
