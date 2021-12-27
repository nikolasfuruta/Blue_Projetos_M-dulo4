/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete,  } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'CRIAÇÃO DO USUÁRIO' })
  @ApiBody({
    description: 'EXECUTADO COM SUCESSO',
    schema: {
      properties: {
        nome: { example: "Nikolas" },
        senha: { example: "nikolas123" },
        imagem: { example: "nikolas.jpeg" },
        bio: { example: "estudante de backend" },
        nascimento: { example: "1989-05-26" }
      }
    },
  })
  @ApiCreatedResponse({description: 'EXECUTADO COM SUCESSO'})
  @ApiBadRequestResponse({ description: 'NÃO ADICIONADO' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'LISTA TODOS OS USUÁRIO' })
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema: {
      properties: {
        id: { example: 2 },
        nome: { example:"sabrina" },
        senha: { example: "$2b$12$c.J79Hj9pBJScpgt8ffvMOqo5BMRHh0ukrATlSwWimLU3a7Nflzqe" },
        imagem: { example: "sabrina.jpeg" },
        bio: { example: "designer" },
        nascimento: { example: "1996-04-17T03:00:00.000Z" },
        criado_em: { example: "2021-12-20T04:10:37.244Z" },
        modificado_em: { example: "2021-12-20T04:10:37.244Z" },
        seguidores: { example:[] },
        seguindo: { example:[] },
        tweet: { example:[] },
      }
    }
  })
  @ApiNotFoundResponse({ description: 'NÃO EXECUTADO' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'EXIBE UM USUÁRIO ESPECÍFICO' })
  @ApiParam({ name: "id", required: true, description: 'ID DO PARTICIPANTE' })
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema: {
      properties: {
        id: { example: 2 },
        nome: { example:"sabrina" },
        senha: { example: "$2b$12$c.J79Hj9pBJScpgt8ffvMOqo5BMRHh0ukrATlSwWimLU3a7Nflzqe" },
        imagem: { example: "sabrina.jpeg" },
        bio: { example: "designer" },
        nascimento: { example: "1996-04-17T03:00:00.000Z" },
        criado_em: { example: "2021-12-20T04:10:37.244Z" },
        modificado_em: { example: "2021-12-20T04:10:37.244Z" },
        seguidores: { example:[] },
        seguindo: { example:[] },
        tweet: { example:[] },
      }
    }
  })
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'ALTERA A PROPRIEDADE DO USUÁRIO' })
  @ApiParam({ name: "id", required: true, description: 'ID DO PARTICIPANTE' })
  @ApiBody({
    description: 'EXECUTADO COM SUCESSO',
    schema: {
      properties: {
        nome: {example: "sandro"}
      }
    }
  })
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema: {
      properties: {
        id: { example: 2 },
        nome: { example:"sandro" },
        senha: { example: "$2b$12$c.J79Hj9pBJScpgt8ffvMOqo5BMRHh0ukrATlSwWimLU3a7Nflzqe" },
        imagem: { example: "sabrina.jpeg" },
        bio: { example: "designer" },
        nascimento: { example: "1996-04-17T03:00:00.000Z" },
        criado_em: { example: "2021-12-20T04:10:37.244Z" },
        modificado_em: { example: "2021-12-20T04:10:37.244Z" },
        seguidores: { example:[] },
        seguindo: { example:[] },
        tweet: { example:[] },
      }
    }
  })
  @ApiNotFoundResponse({ description: 'ID NÃO ENCONTRADO' })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'DELETA UM USUÁRIO' })
  @ApiParam({ name: 'id', required: true, description: 'ID do participante' })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
