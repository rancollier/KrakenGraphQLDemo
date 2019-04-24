# KrakenGraphQLDemo

This project is intended as a demonstration of the GraphQL usefulness.

## List of tasks

1. ✓ Create Git repo
2. ✓ Create docker
3. ✓ Add mysql, node.js, express.js to docker
4. ✓ Generate data for db
5. Setup webpack for FE and ✓ BE

# Sequelize

## Migration commands

### Terminal - Create model
```sh
$ npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

### Terminal - Undo all
```sh
$ npx sequelize db:migrate:undo
```

### Terminal - Undo by a particular migration
```sh
$ npx sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

## Run Docker
```sh
$ make up
```
## Run Migrations
```sh
$ make makeMigrate
$ make makeSeed
```
## Sequelize steps [This will need to be updated]
1
```
$ sequelize init
```

2 // create db
```
$ sequelize db:create // create db
```
3 // create model
```
$ sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

1
custom migrations to make model
```
sequelize segenerate --name [your name]
```
