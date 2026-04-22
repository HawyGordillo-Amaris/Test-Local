import { IsInt, Min } from 'class-validator';

export class CreateInventarioDto {
  @IsInt()
  @Min(1)
  productoID!: number;

  @IsInt()
  @Min(1)
  bodegaID!: number;
}
