/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTweetDto implements Prisma.TweetUncheckedCreateInput{
    id?: number;

    @IsString()
    @IsNotEmpty()
    texto: string;

    @IsString()
    @IsNotEmpty()
    emoji: string;

    data_postagem?: string | Date;

    @IsInt()
    @IsNotEmpty()
    curtidas: number;
}
