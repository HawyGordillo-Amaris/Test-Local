import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombreProducto!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  ean!: string;
}
