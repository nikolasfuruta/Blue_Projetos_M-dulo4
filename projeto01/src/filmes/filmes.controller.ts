/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { ApiBody,  ApiCreatedResponse,  ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('filmes')
@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post('add')
  @ApiBody({
    schema: {
      properties: {
        nome: { example: 'Nikolas'},
        imagemUrl: { example: 'nikolas.jpeg' },
        duracao: { example: 1 },
        genero_id: { example: 1 }
      }
    }
  })
  @ApiCreatedResponse({ description: 'ADICIONADO'})
  @ApiResponse({ status: 400, description: 'NÃO ADICIONADO'})
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.create(createFilmeDto);
  }



  @Get('listall')
  @ApiOkResponse(
    {
      description:'EXECUTADO COM SUCESSO',
      schema: {
        properties: {
          id: { example: 1 },
          nome: { example: 'Nikolas'},
          imagemUrl: { example: 'nikolas.jpeg' },
          data_lancamento: { example: '2021-12-09T20:24:27.521Z' },
          duracao: { example: 1 },
          genero_id: { example: 1 },
          Participantes: { example: [{id:1}]}
        }
      }
    }
  )
  @ApiNotFoundResponse({ description: 'NÃO EXECUTADO' })
  findAll() {
    return this.filmesService.findAll();
  }



  @Get('listid/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do filme' })
  @ApiOkResponse(
    { 
      description:'EXECUTADO COM SUCESSO',
      schema: {
        properties: {
          id: { example: 1 },
          nome: { example: 'Nikolas'},
          imagemUrl: { example: 'nikolas.jpeg' },
          data_lancamento: { example: '2021-12-09T20:24:27.521Z' },
          duracao: { example: 1 },
          genero_id: { example: 1 },
          Participantes: { example: [{id:1}]}
        }
      } 
    }
  )
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }



  @Patch('update/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do filme' })
  @ApiBody({
    schema: {
      properties: {
        genero_id: { example: 1 }
      }
    }
  })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.update(+id, updateFilmeDto);
  }




  @Delete('delete/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do filme' })
  @ApiOkResponse({ description: "DELETADO COM SUCESSO" })
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
