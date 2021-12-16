import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeguidoresModule } from './api/seguidores/seguidores.module';
import { SeguindoModule } from './api/seguindo/seguindo.module';
import { TweetModule } from './api/tweet/tweet.module';
import { UsuarioModule } from './api/usuario/usuario.module';

@Module({
  imports: [SeguidoresModule, SeguindoModule, TweetModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
