import { Injectable } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';

type Movimiento = {
  id: number;
  inventarioID: number;
  fecha: string;
  cantidad: number;
};

@Injectable()
export class MovimientosService {
  constructor(private readonly hasura: HasuraService) {}

  async findAll(): Promise<Movimiento[]> {
    const query =
      'query ListarMovimientos { movimientos(order_by: {id: asc}) { id inventarioID fecha cantidad } }';
    const data = await this.hasura.request<{ movimientos: Movimiento[] }>(
      query,
    );
    return data.movimientos;
  }

  async findOne(id: number): Promise<Movimiento | null> {
    const query =
      'query MovimientoPorId($id: Int!) { movimientos_by_pk(id: $id) { id inventarioID fecha cantidad } }';
    const data = await this.hasura.request<{
      movimientos_by_pk: Movimiento | null;
    }>(query, { id });
    return data.movimientos_by_pk;
  }

  async create(dto: CreateMovimientoDto): Promise<Movimiento> {
    const query =
      'mutation CrearMovimiento($obj: movimientos_insert_input!) { insert_movimientos_one(object: $obj) { id inventarioID fecha cantidad } }';
    const data = await this.hasura.request<{
      insert_movimientos_one: Movimiento;
    }>(query, { obj: dto });
    return data.insert_movimientos_one;
  }

  async update(
    id: number,
    dto: UpdateMovimientoDto,
  ): Promise<Movimiento | null> {
    const query =
      'mutation ActualizarMovimiento($id: Int!, $set: movimientos_set_input!) { update_movimientos_by_pk(pk_columns: {id: $id}, _set: $set) { id inventarioID fecha cantidad } }';
    const data = await this.hasura.request<{
      update_movimientos_by_pk: Movimiento | null;
    }>(query, { id, set: dto });
    return data.update_movimientos_by_pk;
  }

  async remove(id: number): Promise<Movimiento | null> {
    const query =
      'mutation EliminarMovimiento($id: Int!) { delete_movimientos_by_pk(id: $id) { id inventarioID fecha cantidad } }';
    const data = await this.hasura.request<{
      delete_movimientos_by_pk: Movimiento | null;
    }>(query, { id });
    return data.delete_movimientos_by_pk;
  }
}
