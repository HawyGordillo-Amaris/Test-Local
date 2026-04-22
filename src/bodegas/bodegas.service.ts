import { Injectable } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import { CreateBodegaDto } from './dto/create-bodega.dto';
import { UpdateBodegaDto } from './dto/update-bodega.dto';

type Bodega = {
  id: number;
  codigo: string;
  nombreBodega: string;
};

@Injectable()
export class BodegasService {
  constructor(private readonly hasura: HasuraService) {}

  async findAll(): Promise<Bodega[]> {
    const query =
      'query ListarBodegas { bodegas(order_by: {id: asc}) { id codigo nombreBodega } }';

    const data = await this.hasura.request<{ bodegas: Bodega[] }>(query);
    return data.bodegas;
  }

  async findOne(id: number): Promise<Bodega | null> {
    const query =
      'query BodegaPorId($id: Int!) { bodegas_by_pk(id: $id) { id codigo nombreBodega } }';

    const data = await this.hasura.request<{ bodegas_by_pk: Bodega | null }>(
      query,
      { id },
    );
    return data.bodegas_by_pk;
  }

  async create(dto: CreateBodegaDto): Promise<Bodega> {
    const query =
      'mutation CrearBodega($obj: bodegas_insert_input!) { insert_bodegas_one(object: $obj) { id codigo nombreBodega } }';

    const data = await this.hasura.request<{ insert_bodegas_one: Bodega }>(
      query,
      { obj: dto },
    );
    return data.insert_bodegas_one;
  }

  async update(id: number, dto: UpdateBodegaDto): Promise<Bodega | null> {
    const query =
      'mutation ActualizarBodega($id: Int!, $set: bodegas_set_input!) { update_bodegas_by_pk(pk_columns: {id: $id}, _set: $set) { id codigo nombreBodega } }';

    const data = await this.hasura.request<{
      update_bodegas_by_pk: Bodega | null;
    }>(query, { id, set: dto });
    return data.update_bodegas_by_pk;
  }

  async remove(id: number): Promise<Bodega | null> {
    const query =
      'mutation EliminarBodega($id: Int!) { delete_bodegas_by_pk(id: $id) { id codigo nombreBodega } }';

    const data = await this.hasura.request<{
      delete_bodegas_by_pk: Bodega | null;
    }>(query, { id });
    return data.delete_bodegas_by_pk;
  }
}
