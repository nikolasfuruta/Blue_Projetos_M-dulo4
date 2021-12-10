import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerosModule } from './generos/generos.module';
import { ParticipantesModule } from './participantes/participantes.module';
import { FilmesModule } from './filmes/filmes.module';

@Module({
  imports: [GenerosModule, ParticipantesModule, FilmesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
