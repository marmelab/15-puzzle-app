<table>
        <tr>
            <td><img width="120" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rocket.svg" alt="onboarding" /></td>
            <td><strong>Archived Repository</strong><br />
            The code of this repository was written during a <a href="https://marmelab.com/blog/2018/09/05/agile-integration.html">Marmelab agile integration</a>. It illustrates the efforts of a new hiree, who had to implement a board game in several languages and platforms as part of his initial learning. Some of these efforts end up in failure, but failure is part of our learning process, so the code remains publicly visible.<br />
        <strong>This code is not intended to be used in production, and is not maintained.</strong>
        </td>
        </tr>
</table>

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
