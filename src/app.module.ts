import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HasuraModule } from './hasura/hasura.module';
import { BodegasModule } from './bodegas/bodegas.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [HasuraModule, ProductosModule, BodegasModule, InventariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
