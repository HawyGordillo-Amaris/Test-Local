## Lista de Movimientos
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query { movimientos(order_by:{id:asc}) { id inventarioID fecha cantidad } }","variables":{}}'

## Lista de Movimientos (con relaciones si están trackeadas en Hasura)
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query { movimientos(order_by:{id:asc}) { id inventarioID fecha cantidad inventario { id productoID bodegaID producto { id nombreProducto ean } bodega { id codigo nombreBodega } } } }","variables":{}}'

## Movimiento por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query ($id:Int!) { movimientos_by_pk(id:$id) { id inventarioID fecha cantidad } }","variables":{"id":1}}'

## Crear Movimiento
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($obj: movimientos_insert_input!) { insert_movimientos_one(object:$obj) { id inventarioID fecha cantidad } }","variables":{"obj":{"inventarioID":1,"cantidad":10}}}'

## Actualizar Movimiento por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!, $set: movimientos_set_input!) { update_movimientos_by_pk(pk_columns:{id:$id}, _set:$set) { id inventarioID fecha cantidad } }","variables":{"id":1,"set":{"cantidad":5}}}'

## Eliminar Movimiento por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!) { delete_movimientos_by_pk(id:$id) { id } }","variables":{"id":9999}}'

