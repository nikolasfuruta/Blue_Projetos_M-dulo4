/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('participantes')
@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post('add')
  @ApiBody({
    schema: {
      properties: {
        nome: { example: 'Nikolas'},
        imagemUrl: { example: 'nikolas.jpeg' },
        nascimento: { example: '1989-05-12T00:00:00.000Z' },
        filme_id: { example: 1 },
      }
    }
  })
  @ApiCreatedResponse({ description: 'ADICIONADO' })
  @ApiBadRequestResponse({ description: 'NÃO ADICIONADO' })
  create(@Body() createParticipanteDto: CreateParticipanteDto) {
    return this.participantesService.create(createParticipanteDto);
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
          nascimento: { example: '1989-05-12T00:00:00.000Z' },
          filme_id: {  example: 1 },
        }
      }
    }
  )
  @ApiNotFoundResponse({ description: 'NÃO EXECUTADO' })
  findAll() {
    return this.participantesService.findAll();
  }




  @Get('listid/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do participante' })
  @ApiOkResponse(
    { 
      description:'EXECUTADO COM SUCESSO',
      schema: {
        properties: {
          id: { example: 1 },
          nome: { example: 'Nikolas'},
          imagemUrl: { example: 'nikolas.jpeg' },
          nascimento: { example: '1989-05-12T00:00:00.000Z' },
          filme_id: {  example: 1 }
        }
      } 
    }
  )
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  findOne(@Param('id') id: string) {
    return this.participantesService.findOne(+id);
  }




  @Patch('update/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do participante' })
  @ApiBody({
    schema: {
      properties: {
        nome: { example: 'Nikolas'}
      }
    }
  })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  update(@Param('id') id: string, @Body() updateParticipanteDto: UpdateParticipanteDto) {
    return this.participantesService.update(+id, updateParticipanteDto);
  }


  

  @Delete('delete/:id')
  @ApiParam({ name: 'id', required: true, description: 'ID do participante' })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  remove(@Param('id') id: string) {
    return this.participantesService.remove(+id);
  }
}
