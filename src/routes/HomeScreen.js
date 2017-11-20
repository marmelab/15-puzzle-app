import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-primitives';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '15 Puzzle App',
  };

  render() {
    const bannerImg = require('../ressources/images/banner.jpg');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the 15 puzzle app!
        </Text>
        <Image
          source={bannerImg}
          style={styles.banner}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  banner: {
    height: 200,
    width: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
