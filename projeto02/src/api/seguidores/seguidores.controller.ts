/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';

@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  create(@Body() createSeguidoreDto: CreateSeguidoreDto) {
    return this.seguidoresService.create(createSeguidoreDto);
  }

  @Get()
  findAll() {
    return this.seguidoresService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateSeguidoreDto: UpdateSeguidoreDto) {
    return this.seguidoresService.update(+id, updateSeguidoreDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.remove(+id);
  }
}
