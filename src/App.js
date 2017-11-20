import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './routes/HomeScreen';

const Main = StackNavigator({
    Home: { screen: HomeScreen },
});

export default class App extends Component {
    render() {
        return <Main />;
    }
}
