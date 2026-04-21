## Lista de Inventarios (básico)
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query { inventarios(order_by:{id:asc}) { id productoID bodegaID } }","variables":{}}'

## Lista de Inventarios (con relaciones si están trackeadas en Hasura)
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query { inventarios(order_by:{id:asc}) { id productoID bodegaID producto { id nombreProducto ean } bodega { id codigo nombreBodega } movimientos(order_by:{id:asc}) { id cantidad fecha } } }","variables":{}}'

## Inventario por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query ($id:Int!) { inventarios_by_pk(id:$id) { id productoID bodegaID } }","variables":{"id":1}}'

## Crear Inventario
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($obj: inventarios_insert_input!) { insert_inventarios_one(object:$obj) { id productoID bodegaID } }","variables":{"obj":{"productoID":1,"bodegaID":2}}}'

## Actualizar Inventario por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!, $set: inventarios_set_input!) { update_inventarios_by_pk(pk_columns:{id:$id}, _set:$set) { id productoID bodegaID } }","variables":{"id":1,"set":{"bodegaID":1}}}'

## Eliminar Inventario por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!) { delete_inventarios_by_pk(id:$id) { id } }","variables":{"id":9999}}'

