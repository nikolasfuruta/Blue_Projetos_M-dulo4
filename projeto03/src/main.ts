/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet()); //deixar este middleware em primeiro
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
  .setTitle('Blue Projeto 02 Módulo 4')
  .setDescription('API de controle dE Twitter')
  .setVersion('1.0')
  .addTag('usuario')
  .addTag('tweet')
  .addTag('seguindo')
  .addTag('seguidores')
  .addTag('login')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${3000}`);
  });
}
bootstrap();
