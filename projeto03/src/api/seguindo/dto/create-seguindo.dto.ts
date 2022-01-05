/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguindoDto implements Prisma.SeguindoUncheckedCreateInput{
    id?: number;

    @IsInt()
    @IsNotEmpty()
    usuario_id: number;
}
