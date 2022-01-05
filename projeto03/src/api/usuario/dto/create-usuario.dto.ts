/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";
import { IsDateString, isDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto implements Prisma.UsuarioUncheckedCreateInput{
    id?: number;
    nome: string;
    senha: string;
    imagem: string;
    bio: string;
    nascimento: string | Date;
    criado_em?: string | Date;
    modificado_em?: string | Date;

}
