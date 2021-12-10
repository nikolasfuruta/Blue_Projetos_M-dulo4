/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto implements Prisma.FilmesUncheckedCreateInput {
  id?: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  imagemUrl?: string;
  
  data_lancamento?: string | Date;

  @IsInt()
  @IsNotEmpty()
  duracao: number;

  @IsInt()
  genero_id?: number;

  Participantes?: Prisma.ParticipantesUncheckedCreateNestedManyWithoutFilmesInput;
}
