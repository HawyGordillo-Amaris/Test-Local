import { Injectable } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

type Producto = {
  id: number;
  nombreProducto: string;
  ean: string;
};

@Injectable()
export class ProductosService {
  constructor(private readonly hasura: HasuraService) {}

  async findAll(): Promise<Producto[]> {
    const query =
      'query ListarProductos { productos(order_by: {id: asc}) { id nombreProducto ean } }';

    const data = await this.hasura.request<{ productos: Producto[] }>(query);
    return data.productos;
  }

  async findOne(id: number): Promise<Producto | null> {
    const query =
      'query ProductoPorId($id: Int!) { productos_by_pk(id: $id) { id nombreProducto ean } }';

    const data = await this.hasura.request<{
      productos_by_pk: Producto | null;
    }>(query, { id });
    return data.productos_by_pk;
  }

  async create(dto: CreateProductoDto): Promise<Producto> {
    const query =
      'mutation CrearProducto($obj: productos_insert_input!) { insert_productos_one(object: $obj) { id nombreProducto ean } }';

    const data = await this.hasura.request<{ insert_productos_one: Producto }>(
      query,
      { obj: dto },
    );
    return data.insert_productos_one;
  }

  async update(id: number, dto: UpdateProductoDto): Promise<Producto | null> {
    const query =
      'mutation ActualizarProducto($id: Int!, $set: productos_set_input!) { update_productos_by_pk(pk_columns: {id: $id}, _set: $set) { id nombreProducto ean } }';

    const data = await this.hasura.request<{
      update_productos_by_pk: Producto | null;
    }>(query, { id, set: dto });
    return data.update_productos_by_pk;
  }

  async remove(id: number): Promise<Producto | null> {
    const query =
      'mutation EliminarProducto($id: Int!) { delete_productos_by_pk(id: $id) { id nombreProducto ean } }';

    const data = await this.hasura.request<{
      delete_productos_by_pk: Producto | null;
    }>(query, { id });
    return data.delete_productos_by_pk;
  }
}
