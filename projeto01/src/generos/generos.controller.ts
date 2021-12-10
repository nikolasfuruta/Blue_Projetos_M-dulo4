/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('generos')
@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Post('add')
  @ApiBody({
    schema: {
      properties: {
        nome: { example: 'Ação'}
      }
    }
  })
  @ApiCreatedResponse({ description: 'ADICIONADO' })
  @ApiBadRequestResponse({ description: 'NÃO ADICIONADO' })
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generosService.create(createGeneroDto);
  }



  @Get('listall')
  @ApiOkResponse(
    {
      description:'EXECUTADO COM SUCESSO',
      schema: {
        properties: {
          id: { example: 1 },
          nome: { example: 'Nikolas'},
          filmes: { example: [{id:1}]}
        }
      }
    }
  )
  @ApiNotFoundResponse({ description: 'NÃO EXECUTADO' })
  findAll() {
    return this.generosService.findAll();
  }



  @Get('listid/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do genero' })
  @ApiOkResponse(
    { 
      description:'EXECUTADO COM SUCESSO',
      schema: {
        properties: {
          id: { example: 1 },
          nome: { example: 'Nikolas'},
          filmes: { example: [{id:1}]}
        }
      } 
    }
  )
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  findOne(@Param('id') id: string) {
    return this.generosService.findOne(+id);
  }



  @Patch('update/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do genero' })
  @ApiBody({
    schema: {
      properties: {
        nome: { example: 'Ação'}
      }
    }
  })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generosService.update(+id, updateGeneroDto);
  }



  @Delete('delete/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do genero' })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  remove(@Param('id') id: string) {
    return this.generosService.remove(+id);
  }
}
