# 15-puzzle-app

An app to play the 15 puzzle game, in react native.

> See the [related article](https://marmelab.com/blog/2018/02/07/jeu-du-taquin-en-react.html) on the Marmelab blog

## Requirements

Make sure to have `nodejs`, `npm` and `android` installed.

## Help

Print all available commands

``` bash
make
```

## Build

Build the docker

```bash
make install
```

## Run the game

_Note: make sure to have a connected device before running the project._

Run the 15-puzzle game on android

``` bash
make run
```

You can use the `start` alias aswell.

``` bash
make start
```

## Contributing

### Test

Launch the unit and integration tests

``` bash
make test
```

### Linter

Launch the eslint linter

``` bash
make lint
```
