/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Seguindo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';

@Injectable()
export class SeguindoService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(info: CreateSeguindoDto): Promise<Seguindo> {
    return await this.prisma.seguindo.create({ data: info });
  }

  async findAll(): Promise<Seguindo[]> {
    return await this.prisma.seguindo.findMany();
  }

  async findOne(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.findUnique({ where: {id} });
  }

  async update(id: number, info: UpdateSeguindoDto): Promise<Seguindo> {
    return await this.prisma.seguindo.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.delete({ where: {id} });
  }
}
