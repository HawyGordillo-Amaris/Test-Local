## Lista de Productos 
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query { productos(order_by:{id:asc}) { id nombreProducto ean } }","variables":{}}'

## Lista de Productos Por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query ($id:Int!) { productos_by_pk(id:$id) { id nombreProducto ean } }","variables":{"id":2}}'

## Crear Productos 
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($obj: productos_insert_input!) { insert_productos_one(object:$obj) { id nombreProducto ean } }","variables":{"obj":{"nombreProducto":"Mouse","ean":"999999"}}}'

## Actualizar Productos por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!, $set: productos_set_input!) { update_productos_by_pk(pk_columns:{id:$id}, _set:$set) { id nombreProducto ean } }","variables":{"id":1,"set":{"nombreProducto":"Monitor Dell"}}}'

## Eliminar Productos por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!) { delete_productos_by_pk(id:$id) { id } }","variables":{"id":4}}'
