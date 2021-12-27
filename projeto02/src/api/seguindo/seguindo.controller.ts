/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('seguindo')
@Controller('seguindo')
export class SeguindoController {
  constructor(private readonly seguindoService: SeguindoService) {}

  @Post()
  @ApiOperation({ summary: "CRIAÇÃO DE PARTICIPANTES - SEGUINDO" })
  @ApiBody(
    {
      schema:{
        properties: {
          usuario_id: { example: 1 },
        }
      }
    }
  )
  @ApiCreatedResponse({description: 'EXECUTADO COM SUCESSO'})
  @ApiBadRequestResponse({ description: 'NÃO ADICIONADO' })
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.create(createSeguindoDto);
  }

  @Get()
  @ApiOperation({ summary: 'LISTA TODOS OS PARTICIPANTES - SEGUINDO' })
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema:{
      properties: {
        id: { example: 1 },
        usuario_id: { example: 1 },
      }
    }
  })
  @ApiNotFoundResponse({ description: 'NÃO EXECUTADO' })
  findAll() {
    return this.seguindoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'EXIBE UM ÚNICO PARTICIPANTE - SEGUINDO' })
  @ApiParam({ name: "id", required: true, description: 'ID DO PARTICIPANTE' })
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema:{
      properties: {
        id: { example: 1 },
        usuario_id: { example: 1 },
      }
    }
  })
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'ALTERA A PROPRIEDADE DO PARTICIPANTE - SEGUINDO' })
  @ApiParam({ name: "id", required: true, description: 'ID DO PARTICIPANTE' })
  @ApiBody(
    {
      schema:{
        properties: {
          usuario_id: { example: 2 },
        }
      }
    }
  )
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema:{
      properties: {
        id: { example: 1 },
        usuario_id: { example: 2 },
      }
    }
  })
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  update(@Param('id') id: string, @Body() updateSeguindoDto: UpdateSeguindoDto) {
    return this.seguindoService.update(+id, updateSeguindoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'DELETA PARTICIPANTE - SEGUINDO' })
  @ApiParam({ name: "id", required: true, description: 'ID DO PARTICIPANTE' })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  remove(@Param('id') id: string) {
    return this.seguindoService.remove(+id);
  }
}
