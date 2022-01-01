help:
	@echo 'Management commands:'
	@echo
	@echo 'Usage:'
	@echo '    make build           Build docker container.'
	@echo '    make up              Start the service.'
	@echo '    make down            Stops project.'
	@echo

build:
	docker-compose build --force-rm

up:
	docker-compose up

down:
	docker-compose down --remove-orphans
