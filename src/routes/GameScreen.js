import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-primitives';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { game, move } from '../services/GameService';
import Grid from '../components/Grid';

export default class GameScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Game #${navigation.state.params.game.id}`,
    });

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    };

    state = {
        isLoading: true,
        id: -1,
        token: '',
        currentGrid: null,
        turn: -1,
        isWinner: null,
    };

    requestGame = async (id, token) => {
        const { currentPlayer, winner } = await game()(id, token);

        this.setState({
            isLoading: false,
            id,
            token,
            currentGrid: currentPlayer.currentGrid,
            turn: currentPlayer.turn,
            isWinner: winner !== null,
        });
    };

    requestMove = async tile => {
        const { id } = this.state.game;
        const { token } = this.state;
        const { currentPlayer, winner } = await move()(id, token, tile);

        this.setState({
            currentGrid: currentPlayer.currentGrid,
            turn: currentPlayer.turn,
            isWinner: winner !== null,
        });
    };

    componentWillMount() {
        let id = this.props.navigation.state.params.game.id;
        let token = this.props.navigation.state.params.game.token;
        this.requestGame(id, token);
    }

    render() {
        const { currentGrid, turn, isLoading } = this.state;

        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={isLoading}
                        style={styles.loader}
                        size="large"
                    />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Turn {turn}</Text>
                <Grid
                    onPress={this.requestMove}
                    grid={currentGrid}
                    readOnly={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
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
