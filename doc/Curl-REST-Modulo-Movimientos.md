## REST - Módulo Movimientos (Nest Wrapper)

Estos `curl` consumen la API REST del microservicio Nest por defecto en puerto `http://localhost:3000`.
Internamente el servicio llama a Hasura GraphQL usando `HASURA_URL` y `HASURA_ADMIN_SECRET` desde el `.env`.

> Para tener el servicio corriendo:
> - `npm run start:dev`

### Base URL

- `http://localhost:3000`

### 1) Listar movimientos
curl -X GET "http://localhost:3000/movimientos"

### 2) Obtener movimiento por id
curl -X GET "http://localhost:3000/movimientos/1"

### 3) Crear movimiento
curl -X POST "http://localhost:3000/movimientos" \
  -H "Content-Type: application/json" \
  -d "{\"inventarioID\":1,\"cantidad\":10}"

### 4) Actualizar movimiento por id
curl -X PATCH "http://localhost:3000/movimientos/1" \
  -H "Content-Type: application/json" \
  -d "{\"cantidad\":5}"

### 5) Eliminar movimiento por id
curl -X DELETE "http://localhost:3000/movimientos/1"


