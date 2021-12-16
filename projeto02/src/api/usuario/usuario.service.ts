/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(info: CreateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.create({ data: info });
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany(
      { include: { seguidores: true, seguindo: true, tweet: { select: { id: true } } } }
    );
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique(
      { 
        where: { id },
        include: { seguidores: true, seguindo: true, tweet: { select: { id: true } } }
       }
    );
  }

  async update(id: number, info: UpdateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({ where: { id } });
  }
}
