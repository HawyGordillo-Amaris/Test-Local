import { IsInt, IsOptional } from 'class-validator';
import { Min } from 'class-validator';

export class UpdateMovimientoDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  inventarioID?: number;

  @IsOptional()
  @IsInt()
  cantidad?: number;
}
