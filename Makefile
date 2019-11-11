.PHONY: help install run start test lint

help: ## Print all commands (default)
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

####### BUILD #######

copy-config: ## Create the config file based on the config example
	cp -n ./src/config.dist.js ./src/config.js

install: copy-config ## Install dependencies
	npm i

####### RUN #######

run: ## Run the 15-puzzle app
	node_modules/.bin/react-native run-android

start: ## Run the 15-puzzle app (alias for `run`)
	$(MAKE) run

####### DEV #######

test: ## Run all tests
	node_modules/.bin/jest

lint: ## Run the linter
	node_modules/.bin/eslint src/

format: ## Format the source code
	node_modules/.bin/eslint --fix src/*
