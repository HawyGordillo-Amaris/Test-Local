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
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { MovimientosService } from './movimientos.service';

@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}

  @Get()
  findAll() {
    return this.movimientosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const movimiento = await this.movimientosService.findOne(id);
    if (!movimiento) {
      throw new NotFoundException('Movimiento not found.');
    }
    return movimiento;
  }

  @Post()
  create(@Body() dto: CreateMovimientoDto) {
    return this.movimientosService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMovimientoDto,
  ) {
    const movimiento = await this.movimientosService.update(id, dto);
    if (!movimiento) {
      throw new NotFoundException('Movimiento not found.');
    }
    return movimiento;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const movimiento = await this.movimientosService.remove(id);
    if (!movimiento) {
      throw new NotFoundException('Movimiento not found.');
    }
    return movimiento;
  }
}
