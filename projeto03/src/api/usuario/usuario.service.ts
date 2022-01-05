/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as moment from 'moment'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(info: CreateUsuarioDto): Promise<Usuario> {
    info.nascimento = moment(info.nascimento, "YYYY-MM-DD").format()
    info.senha = await bcrypt.hash(info.senha,12) //criptografar
    return await this.prisma.usuario.create({ data: info });
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();   
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique( {where: { id } });
  }

  async update(id: number, info: UpdateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({ where: { id } });
  }

  //métodos para autenticações

  async findByNome(info):Promise<Usuario> {
    return await this.prisma.usuario.findFirst({ where: {nome: info} })
  }

}
