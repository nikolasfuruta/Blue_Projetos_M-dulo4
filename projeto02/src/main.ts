import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet()); //deixar este middleware em primeiro
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${3000}`);
  });
}
bootstrap();
