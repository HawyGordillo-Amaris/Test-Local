## REST - Módulo Productos 

Estos `curl` consumen la API REST del microservicio Nest en `http://localhost:3000`.
Internamente el servicio llama a Hasura (GraphQL) 
usando `HASURA_URL` y `HASURA_ADMIN_SECRET` desde el `.env`.

## Paso 1

> Asegúrate de tener el servicio corriendo:
> - `npm run start:dev`

### Base URL

- `http://localhost:3000`

### 1) Listar productos
curl -X GET "http://localhost:3000/productos"

### 2) Obtener producto por id
curl -X GET "http://localhost:3000/productos/1"

### 3) Crear producto
curl -X POST "http://localhost:3000/productos" \
  -H "Content-Type: application/json" \
  -d "{\"nombreProducto\":\"Mouse\",\"ean\":\"999999\"}"

### 4) Actualizar producto por id
curl -X PATCH "http://localhost:3000/productos/1" \
  -H "Content-Type: application/json" \
  -d "{\"nombreProducto\":\"Mouse Editado\"}"

### 5) Eliminar producto por id
curl -X DELETE "http://localhost:3000/productos/1"


