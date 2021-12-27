/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('tweet')
@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post()
  @ApiOperation({ summary: "CRIAÇÃO DE TWEETS" })
  @ApiBody(
    {
      schema:{
        properties: {
          texto: { example: "texto de referência" },
          emoji: { example: "U+1F600" },
          curtidas: { example: 1 },
          usuario_id: { example: 1 },
        }
      }
    }
  )
  @ApiCreatedResponse({description: 'EXECUTADO COM SUCESSO'})
  @ApiBadRequestResponse({ description: 'NÃO ADICIONADO' })
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetService.create(createTweetDto);
  }

  @Get()
  @ApiOperation({ summary: 'LISTA TODOS OS TWEETS' })
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema:{
      properties: {
        id: { example: 1 },
        texto: { example: "texto de referência" },
        emoji: { example: "U+1F600" },
        data_postagem: { example: "2021-12-21T18:33:26.278Z" },
        curtidas: { example: 1 },
        usuario_id: { example: 1 },
      }
    }
  })
  @ApiNotFoundResponse({ description: 'NÃO EXECUTADO' })
  findAll() {
    return this.tweetService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'EXIBE UM TWEET ESPECÍFICO' })
  @ApiParam({ name: "id", required: true, description: 'ID DO TWEET' })
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema:{
      properties: {
        id: { example: 1 },
        texto: { example: "texto de referência" },
        emoji: { example: "U+1F600" },
        data_postagem: { example: "2021-12-21T18:33:26.278Z" },
        curtidas: { example: 1 },
        usuario_id: { example: 1 },
      }
    }
  })
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  findOne(@Param('id') id: string) {
    return this.tweetService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'ALTERA A PROPRIEDADE DO TWEET' })
  @ApiParam({ name: "id", required: true, description: 'ID DO TWEET' })
  @ApiBody(
    {
      schema:{
        properties: {
          texto: { example: "texto de referência 2" }
        }
      }
    }
  )
  @ApiOkResponse({
    description: 'EXECUTADO COM SUCESSO',
    schema:{
      properties: {
        id: { example: 1 },
        texto: { example: "texto de referência 2" },
        emoji: { example: "U+1F600" },
        data_postagem: { example: "2021-12-21T18:33:26.278Z" },
        curtidas: { example: 1 },
        usuario_id: { example: 1 },
      }
    }
  })
  @ApiNotFoundResponse({ description: 'ID NÃO ENCONTRADO' })
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetService.update(+id, updateTweetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'DELETA UM TWEET ESPECÍFICO' })
  @ApiParam({ name: "id", required: true, description: 'ID DO TWEET' })
  @ApiOkResponse({ description: 'EXECUTADO COM SUCESSO'})
  @ApiNotFoundResponse({ description:'ID NÃO ENCONTRADO' })
  remove(@Param('id') id: string) {
    return this.tweetService.remove(+id);
  }
}
