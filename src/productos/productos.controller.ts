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
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const producto = await this.productosService.findOne(id);
    if (!producto) {
      throw new NotFoundException('Producto not found.');
    }
    return producto;
  }

  @Post()
  create(@Body() dto: CreateProductoDto) {
    return this.productosService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProductoDto,
  ) {
    const producto = await this.productosService.update(id, dto);
    if (!producto) {
      throw new NotFoundException('Producto not found.');
    }
    return producto;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const producto = await this.productosService.remove(id);
    if (!producto) {
      throw new NotFoundException('Producto not found.');
    }
    return producto;
  }
}
