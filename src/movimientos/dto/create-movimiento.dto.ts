import { IsInt } from 'class-validator';
import { Min } from 'class-validator';

export class CreateMovimientoDto {
  @IsInt()
  @Min(1)
  inventarioID!: number;

  @IsInt()
  cantidad!: number;
}
