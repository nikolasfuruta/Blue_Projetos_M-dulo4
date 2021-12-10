/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGeneroDto implements Prisma.GenerosCreateInput {
  @IsString()
  @IsNotEmpty()
  nome: string;

  Filmes?: Prisma.FilmesCreateNestedManyWithoutGenerosInput;
}
