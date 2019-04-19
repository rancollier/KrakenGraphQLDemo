# KrakenGraphQLDemo

This project is intended as a demonstration of the GraphQL usefulness.

## List of tasks

1. Create Git repo
2. Create docker
3. Add mysql, node.js, express.js to docker
4. Generate data for db
5. Setup webpack for FE and BE

# Sequelize

## Create Model

npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

## Run Migrations

npx sequelize db:migrate
