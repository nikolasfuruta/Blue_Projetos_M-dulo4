/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('BLUE Projeto01 Mod-4')
    .setDescription('API de integração com Banco de Dados utilizando NestJS com Prisma')
    .setVersion('1.0')
    .addTag('filmes')
    .addTag('generos')
    .addTag('participantes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${3000}`);
  });
}
bootstrap();
