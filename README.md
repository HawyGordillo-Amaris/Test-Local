<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# #########################################################

## API de Gestión de Inventario (Backend Serverless)

Explicacion sobre arquitectura con Base de datos 

## Base de Datos 
Motor de Base de Datos: PostgreSQL 15.

Uso de Neon.tech https://neon.tech/ (PostgreSQL Serverless). 

## Motor de API (Microservicio): Hasura GraphQL Engine https://hasura.io/. 

Se utilizó Hasura (herramienta permitida en el requerimiento) para conectar directamente con PostgreSQL y generar una API GraphQL de alto rendimiento en tiempo real, garantizando seguridad y eliminando el código repetitivo (boilerplate) de un CRUD tradicional en Node.js.

## Reglas de Negocio Implementadas (Integridad Referencial)

El esquema de base de datos `database/schema.sql` protege la integridad de los datos a nivel de motor:

1. Unicidad de EAN y Códigos:** No se permiten productos con EAN duplicados ni bodegas con códigos repetidos (`UNIQUE`).

2. Prevención de Duplicidad en Inventario:** Un mismo producto no puede registrarse dos veces en la misma bodega Índice Compuesto `UNIQUE("productoID", "bodegaID")`.

3. Protección de Eliminación:** No se puede eliminar una bodega o producto si tiene inventario asociado `ON DELETE RESTRICT`.

## Endpoint y Consumo de la API

La API está desplegada en producción y lista para ser consumida por el Frontend vía GraphQL.

## GraphQL Endpoint: (https://steady-shrimp-32.hasura.app/v1/graphql)

* Método: POST

## Ejemplo de Consulta (Query) - Obtener Inventario y Movimientos:
`graphql
query ObtenerInventarioCompleto {
  inventarios {
    id
    producto {
      nombreProducto
      ean
    }
    bodega {
      nombreBodega
    }
    movimientos {
      cantidad
      fecha
    }
  }
}

## Se incluye un archivo api-tests.http 

En la raíz del proyecto se crean los payloads de GraphQL listos para ser ejecutados, y un script database/seed.sql con datos iniciales para facilitar las pruebas.

## Uso con Hasura (recomendado para esta prueba)

Este repositorio se está alineando para que el CRUD se consuma desde Hasura (GraphQL) apuntando a Neon.

- Endpoint Hasura: `https://steady-shrimp-32.hasura.app/v1/graphql`
- Ejemplos listos para ejecutar: `api-tests.http` (secciones Productos, Bodegas e Inventarios)
- Curls: `doc/Curl-Modulo-Productos.md`, `doc/Curl-Modulo-Bodegas.md`, `doc/Curl-Modulo-Inventarios.md` (reemplaza `<HASURA_ADMIN_SECRET>`)


## Como Correr el Proyecto 
Start Projecto
  npm run start:dev 
