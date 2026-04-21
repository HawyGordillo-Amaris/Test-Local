import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nombreProducto?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  ean?: string;
}
