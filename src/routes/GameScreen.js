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
    }

    requestGame = async () => {
        let id = this.props.navigation.state.params.game.id;
        let token = this.props.navigation.state.params.game.token;

        const res = await game()(id, token);
        this.setState({
            isLoading: false,
            id,
            token,
            currentGrid: res.currentPlayer.currentGrid,
            turn: res.currentPlayer.turn,
            isWinner: res.winner !== null,
        });
    };

    requestMove = async tile => {
        console.log('tile', tile);
        let id = this.state.game.id;
        let token = this.state.token;

        const res = await move()(id, token, tile);
        this.setState({
            id,
            token,
            currentGrid: res.player.currentGrid,
            turn: res.player.turn,
            isWinner: res.game.winner !== null,
        });
    };

    componentWillMount() {
        this.requestGame();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={this.state.isLoading}
                        style={styles.loader}
                        size="large"
                    />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Turn {this.state.turn}</Text>
                <Grid
                    onPress={this.requestMove}
                    grid={this.state.currentGrid}
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
