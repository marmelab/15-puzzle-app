import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-primitives';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { game, move } from '../services/GameService';

export default class GameScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Game #${navigation.state.params.game.id}`,
    });

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            id: -1,
            token: '',
            currentGrid: null,
            turn: -1,
            isWinner: null,
        };

        this.requestGame = this.requestGame.bind(this);
        this.requestMove = this.requestMove.bind(this);
    }

    requestGame() {
        let id = this.props.navigation.state.params.game.id;
        let token = this.props.navigation.state.params.game.token;

        game()(id, token).then(res => {
            this.setState({
                isLoading: false,
                id,
                token,
                currentGrid: res.currentPlayer.currentGrid,
                turn: res.currentPlayer.turn,
                isWinner: res.winner !== null,
            });
        });
    }

    requestMove(tile) {
        let id = this.state.game.id;
        let token = this.state.token;

        move()(id, token, tile).then(res => {
            this.setState({
                id,
                token,
                currentGrid: res.player.currentGrid,
                turn: res.player.turn,
                isWinner: res.game.winner !== null,
            });
        });
    }

    componentWillMount() {
        this.requestGame();
    }

    render() {
        let content = null;
        if (this.state.isLoading) {
            content = (
                <ActivityIndicator
                    animating={this.state.isLoading}
                    style={styles.loader}
                    size="large"
                />
            );
        } else {
            content = <Text style={styles.title}>Turn {this.state.turn}</Text>;
        }

        return <View style={styles.container}>{content}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    loader: {
        alignItems: 'center',
        height: 80,
        justifyContent: 'center',
        padding: 8,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
