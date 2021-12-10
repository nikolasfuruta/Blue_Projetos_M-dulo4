/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Participantes } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateParticipanteDto): Promise<Participantes> {
    return await this.prisma.participantes.create({ data });
  }

  async findAll(): Promise<Participantes[]> {
    return await this.prisma.participantes.findMany();
  }

  async findOne(id: number): Promise<Participantes> {
    return await this.prisma.participantes.findUnique({ where: { id } });
  }

  async update(id: number, info: UpdateParticipanteDto): Promise<Participantes> {
    return await this.prisma.participantes.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Participantes> {
    return await this.prisma.participantes.delete({ where: { id } });
  }
}
