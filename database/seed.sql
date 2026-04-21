-- Insertar Bodegas iniciales
INSERT INTO bodegas (codigo, "nombreBodega") VALUES 
('BOD-01', 'Bodega Prueba Bogota'),
('BOD-02', 'Bodega Prueba Medellin');

-- Insertar Productos iniciales
INSERT INTO productos ("nombreProducto", ean) VALUES 
('Computador 1 Toshiba', '12345678'),
('Monitor Dell', '23456789'),
('Teclado Mecánico ', '34567890');

-- Crear inventario inicial Bodega Bogota)
INSERT INTO inventarios ("productoID", "bodegaID") VALUES 
(1, 1), 
(2, 1), 
(3, 1);

-- Registros Movimientos
INSERT INTO movimientos ("inventarioID", cantidad) VALUES 
(1, 60), -- Entran 60 Computadores
(2, 30), -- Entran 30 Monitores
(3, 100); -- Entran 100 Teclados