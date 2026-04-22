import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateInventarioDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  productoID?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  bodegaID?: number;
}
