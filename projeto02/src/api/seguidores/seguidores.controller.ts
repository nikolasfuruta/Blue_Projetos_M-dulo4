/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('seguidores')
@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  @ApiOperation({ summary: "CRIAÇÃO DE PARTICIPANTES - SEGUIDORES" })
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
  create(@Body() createSeguidoreDto: CreateSeguidoreDto) {
    return this.seguidoresService.create(createSeguidoreDto);
  }

  @Get()
  @ApiOperation({ summary: 'LISTA TODOS OS PARTICIPANTES - SEGUIDORES' })
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
    return this.seguidoresService.findAll();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'EXIBE UM ÚNICO PARTICIPANTE - SEGUIDOR' })
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
    return this.seguidoresService.findOne(+id);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'ALTERA A PROPRIEDADE DO PARTICIPANTE - SEGUIDOR' })
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
  update(@Param('id') id: string, @Body() updateSeguidoreDto: UpdateSeguidoreDto) {
    return this.seguidoresService.update(+id, updateSeguidoreDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'DELETA PARTICIPANTE - SEGUIDOR' })
  @ApiParam({ name: "id", required: true, description: 'ID DO PARTICIPANTE' })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  remove(@Param('id') id: string) {
    return this.seguidoresService.remove(+id);
  }
}
