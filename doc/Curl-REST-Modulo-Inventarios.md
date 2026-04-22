## REST - Módulo Inventarios (Nest Wrapper)

Estos `curl` consumen la API REST del microservicio Nest (por defecto en `http://localhost:3000`).
Internamente el servicio llama a Hasura (GraphQL) usando `HASURA_URL` y `HASURA_ADMIN_SECRET` desde tu `.env`.

> Asegúrate de tener el servicio corriendo:
> - `npm run start:dev`

### Base URL

- `http://localhost:3000`

### 1) Listar inventarios

```bash
curl -X GET "http://localhost:3000/inventarios"
```

### 2) Obtener inventario por id

```bash
curl -X GET "http://localhost:3000/inventarios/1"
```

### 3) Crear inventario

```bash
curl -X POST "http://localhost:3000/inventarios" \
  -H "Content-Type: application/json" \
  -d "{\"productoID\":1,\"bodegaID\":2}"
```

### 4) Actualizar inventario por id

```bash
curl -X PATCH "http://localhost:3000/inventarios/1" \
  -H "Content-Type: application/json" \
  -d "{\"bodegaID\":1}"
```

### 5) Eliminar inventario por id

```bash
curl -X DELETE "http://localhost:3000/inventarios/1"
```

