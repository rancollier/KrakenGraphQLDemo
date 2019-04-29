 # DOCKER TASKS

up: ## Build and run docker-compose
	docker-compose up -d --build
up_debug:
	docker-compose up --build
stop:
	docker-compose down
delete_containers: ## Delete all containers
	docker rm $(docker ps -a -q)
delete_images: ## Delete all images
	docker rmi $(docker images -q)
bash_server:
	docker exec -it app-server /bin/bash
bash_nginx:
	docker exec -it app-nginx /bin/bash
makeMigrate:
	docker exec app-server npm run sequelize:migrate
makeSeed: 
	docker exec app-server npm run sequelize:seed
mysql: 
	docker-compose exec mysql-db
logs:
	docker logs app-server
logs_watch:
	docker logs -f app-server
logs_nginx:
	docker logs  app-nginx