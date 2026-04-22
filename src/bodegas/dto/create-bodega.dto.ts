import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateBodegaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  codigo!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombreBodega!: string;
}
