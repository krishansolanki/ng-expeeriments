.PHONY: start build test lint e2e clean
BUILD_VERSION = $(shell git describe --tags)

start: docker-image
	@docker/docker-run.sh npm start

build: docker-image
	@docker/docker-run.sh npm build

test: docker-image
	@docker/docker-run.sh npm test

lint: docker-image
	@docker/docker-run.sh npm lint

e2e: docker-image
	@docker/docker-run.sh npm e2e

clean:
	@rm -rf dist app

docker-image:
	@docker/build-docker-image.sh
