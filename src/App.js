import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './routes/HomeScreen';
import GameScreen from './routes/GameScreen';

const Main = StackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
});

export default class App extends Component {
    render() {
        return <Main />;
    }
}
