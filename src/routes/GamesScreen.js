import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-primitives';
import { ActivityIndicator, Button, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';

import ListGames from '../components/ListGames';
import { games, join } from '../services/GameService';

export default class GamesScreen extends Component {
    static navigationOptions = {
        title: 'Multiplayer game',
    };
    s;
    static propTypes = {
        navigation: PropTypes.object.isRequired,
    };

    state = {
        isLoading: true,
        gameIds: [],
    };

    requestGames = async () => {
        try {
            const { gameIds } = await games()();
            this.setState({
                isLoading: false,
                gameIds,
            });
        } catch (error) {
            ToastAndroid.showWithGravity(
                'A server error occured, please retry later.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
            );
        }
    };

    requestNewMultiGame = () => {};

    requestJoinGame = async id => {
        this.setState({
            isLoading: true,
        });

        try {
            const game = await join()(id);
            const { navigation } = this.props;
            navigation.navigate('Game', {
                game,
            });
        } catch (error) {
            ToastAndroid.showWithGravity(
                'A server error occured, please retry later.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
            );
        }

        this.setState({
            isLoading: false,
        });
    };

    componentWillMount() {
        this.requestGames();
    }

    render() {
        const { gameIds } = this.state;
        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <View style={styles.page}>
                    <View style={styles.container}>
                        <ActivityIndicator
                            animating={isLoading}
                            style={styles.loader}
                            size="large"
                        />
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.bloc}>
                        <Text style={styles.title}>
                            Join a multiplayer game
                        </Text>
                        <ListGames
                            onGameSelected={this.requestJoinGame}
                            gameIds={gameIds}
                        />
                    </View>
                    <View style={styles.actions}>
                        <Button
                            style={styles.button}
                            onPress={this.requestNewMultiGame}
                            title="Create a multiplayer game"
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
    loader: {
        alignItems: 'center',
        height: 80,
        justifyContent: 'center',
        padding: 8,
    },
    page: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
