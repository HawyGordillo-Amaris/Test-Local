import { Injectable } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

type Inventario = {
  id: number;
  productoID: number;
  bodegaID: number;
};

@Injectable()
export class InventariosService {
  constructor(private readonly hasura: HasuraService) {}

  async findAll(): Promise<Inventario[]> {
    const query =
      'query ListarInventarios { inventarios(order_by: {id: asc}) { id productoID bodegaID } }';
    const data = await this.hasura.request<{ inventarios: Inventario[] }>(
      query,
    );
    return data.inventarios;
  }

  async findOne(id: number): Promise<Inventario | null> {
    const query =
      'query InventarioPorId($id: Int!) { inventarios_by_pk(id: $id) { id productoID bodegaID } }';
    const data = await this.hasura.request<{
      inventarios_by_pk: Inventario | null;
    }>(query, { id });
    return data.inventarios_by_pk;
  }

  async create(dto: CreateInventarioDto): Promise<Inventario> {
    const query =
      'mutation CrearInventario($obj: inventarios_insert_input!) { insert_inventarios_one(object: $obj) { id productoID bodegaID } }';
    const data = await this.hasura.request<{
      insert_inventarios_one: Inventario;
    }>(query, { obj: dto });
    return data.insert_inventarios_one;
  }

  async update(
    id: number,
    dto: UpdateInventarioDto,
  ): Promise<Inventario | null> {
    const query =
      'mutation ActualizarInventario($id: Int!, $set: inventarios_set_input!) { update_inventarios_by_pk(pk_columns: {id: $id}, _set: $set) { id productoID bodegaID } }';
    const data = await this.hasura.request<{
      update_inventarios_by_pk: Inventario | null;
    }>(query, { id, set: dto });
    return data.update_inventarios_by_pk;
  }

  async remove(id: number): Promise<Inventario | null> {
    const query =
      'mutation EliminarInventario($id: Int!) { delete_inventarios_by_pk(id: $id) { id productoID bodegaID } }';
    const data = await this.hasura.request<{
      delete_inventarios_by_pk: Inventario | null;
    }>(query, { id });
    return data.delete_inventarios_by_pk;
  }
}
