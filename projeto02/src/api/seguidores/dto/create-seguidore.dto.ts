/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguidoreDto implements Prisma.SeguidoresUncheckedCreateInput {
    id?: number;

    @IsInt()
    @IsNotEmpty()
    usuario_id: number;
}
