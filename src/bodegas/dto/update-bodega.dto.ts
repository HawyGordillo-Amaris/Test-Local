import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateBodegaDto {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  codigo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  nombreBodega?: string;
}
