/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Seguidores } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';

@Injectable()
export class SeguidoresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(info: CreateSeguidoreDto): Promise<Seguidores> {
    return await this.prisma.seguidores.create({ data: info });
  }

  async findAll(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  async findOne(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ where: {id} })
  }

  async update(id: number, info: UpdateSeguidoreDto): Promise<Seguidores> {
    return await this.prisma.seguidores.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.delete({ where: {id} });
  }
}
