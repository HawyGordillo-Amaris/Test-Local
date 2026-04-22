# API de Gestión de Inventario (Hasura + Neon + REST opcional)

Esta solución usa plataforma como Neon para Postgres como base de datos y Hasura para GraphQL para el CRUD. Además, tienes un servicio Nest que expone endpoints REST y por debajo llama a Hasura para cumplir el requisito de “API REST” en la prueba.

## Endpoints

- Hasura (GraphQL): `https://steady-shrimp-32.hasura.app/v1/graphql`
- Nest (REST, local): `http://localhost:3000`

## Cómo correr el servicio (paso a paso)

1) Instala dependencias:
- `npm install`

2) Crea tu `.env` (local):
- Copia `.env.example` → `.env`
- Completa estas variables:
  - `HASURA_URL=https://steady-shrimp-32.hasura.app/v1/graphql`
  - `HASURA_ADMIN_SECRET=TU_SECRET` (si Hasura lo exige)
  - `PORT=3000`

3) Levanta el Nest localmente:
- `npm run start:dev`

Si te dice que el puerto 3000 está ocupado, libera el puerto o cambia `PORT` en tu `.env`.

## Cómo probar de manera simple

### 1) Probar directo a Hasura GraphQL
En la carpeta Prueba Tecnica D1\inventory-api\doc se encuentran almacenados los curls para probar la api en la nube para probar en postman.

Se necesita la <HASURA_ADMIN_SECRET> remplaza la variable con el valor real 

- Requests listas: `api-tests.http` (Productos, Bodegas, Inventarios, Movimientos)
- Curls:
  - `doc/Curl-Modulo-Productos.md`
  - `doc/Curl-Modulo-Bodegas.md`
  - `doc/Curl-Modulo-Inventarios.md`
  - `doc/Curl-Modulo-Movimientos.md`

### 2) Probar el wrapper REST Nest → Hasura
En la carpeta Prueba Tecnica D1\inventory-api\doc se encuentran almacenados los curls para probar la api local en postman.

- Curls REST:
  - `doc/Curl-REST-Modulo-Productos.md`
  - `doc/Curl-REST-Modulo-Bodegas.md`
  - `doc/Curl-REST-Modulo-Inventarios.md`
  - `doc/Curl-REST-Modulo-Movimientos.md`

## Base de datos (esquema y seed)

Si se necesita recrear el esquema y cargar datos:
- Esquema: `database/schema.sql`
- Seed: `database/seed.sql`

Con Prisma CLI (apuntando a tu `DATABASE_URL` en `.env`):
- `npx prisma db push`
- `npx prisma db execute --file database/seed.sql`

## Nota rápida de seguridad

El `admin secret` no se commitea. se guarda en el funee local en el archivo `.env`.
