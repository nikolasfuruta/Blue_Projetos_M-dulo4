/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Generos } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(data: CreateGeneroDto): Promise<Generos> {
    return await this.prisma.generos.create({ data });
  }

  async findAll(): Promise<Generos[]> {
    return await this.prisma.generos.findMany(
      { include: { Filmes: { select: { id: true } } } }
    );
  }

  async findOne(id: number): Promise<Generos> {
    return await this.prisma.generos.findUnique(
      { where: { id }, include: { Filmes: { select: { id: true } } } }
    );
  }

  async update(id: number, info: UpdateGeneroDto): Promise<Generos> {
    return await this.prisma.generos.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Generos> {
    return await this.prisma.generos.delete({ where: { id } });
  }
}
