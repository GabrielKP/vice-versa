ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build --remove-orphans

build-produdction:
	docker-compose -f docker-compose.yml up --build

up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

down:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

down-V:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -V
