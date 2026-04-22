import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBodegaDto } from './dto/create-bodega.dto';
import { UpdateBodegaDto } from './dto/update-bodega.dto';
import { BodegasService } from './bodegas.service';

@Controller('bodegas')
export class BodegasController {
  constructor(private readonly bodegasService: BodegasService) {}

  @Get()
  findAll() {
    return this.bodegasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const bodega = await this.bodegasService.findOne(id);
    if (!bodega) {
      throw new NotFoundException('Bodega not found.');
    }
    return bodega;
  }

  @Post()
  create(@Body() dto: CreateBodegaDto) {
    return this.bodegasService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBodegaDto,
  ) {
    const bodega = await this.bodegasService.update(id, dto);
    if (!bodega) {
      throw new NotFoundException('Bodega not found.');
    }
    return bodega;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const bodega = await this.bodegasService.remove(id);
    if (!bodega) {
      throw new NotFoundException('Bodega not found.');
    }
    return bodega;
  }
}
