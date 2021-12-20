/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SeguidoresModule } from './api/seguidores/seguidores.module';
import { SeguindoModule } from './api/seguindo/seguindo.module';
import { TweetModule } from './api/tweet/tweet.module';
import { UsuarioModule } from './api/usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SeguidoresModule, SeguindoModule, TweetModule, UsuarioModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
