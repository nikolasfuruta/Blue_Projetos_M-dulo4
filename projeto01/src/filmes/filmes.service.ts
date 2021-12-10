/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Filmes } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFilmeDto): Promise<Filmes> {
    return await this.prisma.filmes.create({ data });
  }

  async findAll(): Promise<Filmes[]> {
    return await this.prisma.filmes.findMany(
      { include: {  Participantes: { select: { id: true } } } }
    );
  }

  async findOne(id: number): Promise<Filmes> {
    return await this.prisma.filmes.findUnique(
      { where: { id }, include: { Participantes: { select: { id: true } } } }
    );
  }

  async update(id: number, info: UpdateFilmeDto): Promise<Filmes> {
    return await this.prisma.filmes.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Filmes> {
    return await this.prisma.filmes.delete({ where: { id } });
  }
}
