## ---- PostgresSQL

* comando para baixar a imagem caso não exista na máquina do PostgresSQL

```
docker run \
    --name postgres \
    -e POSTGRES_USER=williamkoller \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres
```

* comando que verifica se tem algum container rodando

```
docker ps
```

* comando para entrar no contariner

```
docker exec -it postgres /bin/bash
```

* comando para baixar o adminer, interface gráfica para Database

```
docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer
```

## ---- MongoDB

* comando para baixar a imagem caso não exista na máquina do MongoDB

```
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4
```

* client para MongoDB

```
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient
```

* comando para criar um banco de dados

docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({ user: 'williamkoller', pwd: 'minhasenhasecreta', roles: [{ role: 'readWrite', db: 'herois'}]})"
