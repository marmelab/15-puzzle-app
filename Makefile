.PHONY: help install run test

help: ## Print all commands (default)
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

####### BUILD #######

install: ## Install the requirements
	npm i

####### RUN #######

run: ## Run the 15-puzzle game with the env variable SIZE as parameter
	npm run-android

####### DEV #######

test: ## Run all tests
	go test -v ./...
