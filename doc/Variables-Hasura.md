## Variables para probar Hasura (sin commitear secretos)

### 1) Endpoint

Tu endpoint de Hasura es:

- `https://steady-shrimp-32.hasura.app/v1/graphql`

### 2) Admin Secret (si aplica)

Si tu proyecto tiene habilitado Admin Secret, debes enviar este header en cada request:

- `x-hasura-admin-secret: <TU_SECRET>`

Importante: no lo dejes guardado en el repositorio ni lo commitees.

### 3) Probar desde `api-tests.http` (VS Code REST Client)

- Abre `api-tests.http`
- Completa (solo local) la variable:
  - `@admin_secret = <TU_SECRET>`
- Ejecuta cada request.

### 4) Probar con curl

Ejemplo (reemplaza el secret):

```bash
curl -X POST "https://steady-shrimp-32.hasura.app/v1/graphql" ^
  -H "Content-Type: application/json" ^
  -H "x-hasura-admin-secret: <TU_SECRET>" ^
  -d "{\"query\":\"query { productos(order_by:{id:asc}){id nombreProducto ean}}\"}"
```

