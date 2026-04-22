## REST - Módulo Bodegas 

Estos `curl` consumen la API REST del microservicio en `http://localhost:3000`.
Internamente el servicio llama a Hasura para GraphQL usando `HASURA_URL` y `HASURA_ADMIN_SECRET` desde el `.env`.

> Para tener el servicio corriendo:
> - `npm run start:dev`

### Base URL
- `http://localhost:3000`

### 1) Listar bodegas
curl -X GET "http://localhost:3000/bodegas"

### 2) Obtener bodega por id
curl -X GET "http://localhost:3000/bodegas/1"

### 3) Crear bodega
curl -X POST "http://localhost:3000/bodegas" \
  -H "Content-Type: application/json" \
  -d "{\"codigo\":\"BOD-03\",\"nombreBodega\":\"Bodega Prueba Cali\"}"

### 4) Actualizar bodega por id
curl -X PATCH "http://localhost:3000/bodegas/1" \
  -H "Content-Type: application/json" \
  -d "{\"nombreBodega\":\"Bodega Prueba Bogotá (Editado)\"}"

### 5) Eliminar bodega por id
curl -X DELETE "http://localhost:3000/bodegas/1"

