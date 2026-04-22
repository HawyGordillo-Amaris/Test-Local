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
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { InventariosService } from './inventarios.service';

@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventariosService: InventariosService) {}

  @Get()
  findAll() {
    return this.inventariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const inventario = await this.inventariosService.findOne(id);
    if (!inventario) {
      throw new NotFoundException('Inventario not found.');
    }
    return inventario;
  }

  @Post()
  create(@Body() dto: CreateInventarioDto) {
    return this.inventariosService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInventarioDto,
  ) {
    const inventario = await this.inventariosService.update(id, dto);
    if (!inventario) {
      throw new NotFoundException('Inventario not found.');
    }
    return inventario;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const inventario = await this.inventariosService.remove(id);
    if (!inventario) {
      throw new NotFoundException('Inventario not found.');
    }
    return inventario;
  }
}
