import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';

@Controller('seguindo')
export class SeguindoController {
  constructor(private readonly seguindoService: SeguindoService) {}

  @Post()
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.create(createSeguindoDto);
  }

  @Get()
  findAll() {
    return this.seguindoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguindoDto: UpdateSeguindoDto) {
    return this.seguindoService.update(+id, updateSeguindoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguindoService.remove(+id);
  }
}
