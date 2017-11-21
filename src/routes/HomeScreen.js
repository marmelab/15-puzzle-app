import React, { Component } from 'react';
import { Image, Text, StyleSheet, View } from 'react-primitives';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import { newGame } from '../services/GameService';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '15 Puzzle App',
    };

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    };

    requestNewGame = async mode => {
        const res = await newGame()(mode);
        this.props.navigation.navigate('Game', {
            game: res,
        });
    };

    requestNewSingleGame = () => {
        this.requestNewGame('single');
    };

    render() {
        const bannerImg = require('../ressources/images/banner.jpg');

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to the 15 puzzle app!
                </Text>
                <Image source={bannerImg} style={styles.banner} />
                <Button
                    style={styles.actions}
                    onPress={this.requestNewSingleGame}
                    title="Start a new game"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actions: {
        margin: 10,
    },
    banner: {
        height: 200,
        width: 200,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
