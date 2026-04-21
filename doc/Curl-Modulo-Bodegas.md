## Lista de Bodegas
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query { bodegas(order_by:{id:asc}) { id codigo nombreBodega } }","variables":{}}'

## Lista de Bodegas por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"query ($id:Int!) { bodegas_by_pk(id:$id) { id codigo nombreBodega } }","variables":{"id":1}}'

## Crear Bodega
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($obj: bodegas_insert_input!) { insert_bodegas_one(object: $obj) { id codigo nombreBodega } }","variables":{"obj":{"codigo":"BOD-03","nombreBodega":"Bodega Prueba Cali"}}}'

## Actualizar Bodega por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!, $set: bodegas_set_input!) { update_bodegas_by_pk(pk_columns:{id:$id}, _set:$set) { id codigo nombreBodega } }","variables":{"id":1,"set":{"nombreBodega":"Bodega Prueba Bogotá (Editado)"}}}'

## Eliminar Bodega por ID
curl --location 'https://steady-shrimp-32.hasura.app/v1/graphql' \
--header 'Content-Type: application/json' \
--header 'x-hasura-admin-secret: <HASURA_ADMIN_SECRET>' \
--data '{"query":"mutation ($id:Int!) { delete_bodegas_by_pk(id:$id) { id } }","variables":{"id":9999}}'

