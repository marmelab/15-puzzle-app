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
        const game = await newGame()(mode);
        const { navigation } = this.props;
        navigation.navigate('Game', {
            game,
        });
    };

    requestNewSingleGame = () => {
        this.requestNewGame('single');
    };

    render() {
        const bannerImg = require('../ressources/images/banner.jpg');

        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.bloc}>
                        <Text style={styles.welcome}>
                            Welcome to the 15 puzzle app!
                        </Text>
                        <Image source={bannerImg} style={styles.banner} />
                    </View>
                    <View style={styles.actions}>
                        <Button
                            onPress={this.requestNewSingleGame}
                            title="Start a new game"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actions: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        margin: 10,
    },
    banner: {
        height: 200,
        width: '100%',
    },
    bloc: {
        backgroundColor: '#E3F2FD',
        borderRadius: 2,
        elevation: 3,
        margin: 10,
        padding: 10,
        width: '100%',
    },
    container: {
        alignItems: 'center',
        width: '90%',
        justifyContent: 'flex-start',
    },
    page: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
