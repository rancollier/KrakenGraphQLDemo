 # DOCKER TASKS

up: ## Build and run docker-compose
	docker-compose up -d --build
up_debug:
	docker-compose up --build
stop:
	docker-compose down
bash_server:
	docker exec -it app-server /bin/bash
logs:
	docker logs app-server
logs_watch:
	docker logs -f app-server
logs_nginx:
	docker logs  app-nginx