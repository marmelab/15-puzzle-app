import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-primitives';
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
            game: this.props.navigation.state.params.game,
            canPlay: true,
        };
    }

    requestGame() {
        game()().then();
    }

    requestMove() {
        move()().then();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Turn</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
