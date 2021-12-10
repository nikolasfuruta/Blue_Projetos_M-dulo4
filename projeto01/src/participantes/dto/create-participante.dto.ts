/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

// eslint-disable-next-line prettier/prettier
export class CreateParticipanteDto implements Prisma.ParticipantesUncheckedCreateInput {
  id?: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  imagemUrl?: string;

  @IsDateString()
  nascimento?: string | Date;

  @IsInt()
  film_id?: number;
}
