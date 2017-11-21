import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-primitives';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export default class Tile extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        tileValue: PropTypes.number.isRequired,
        enabled: PropTypes.bool,
    };

    static defaultProps = {
        enabled: true,
    };

    move = () => {
        const { enabled, tileValue, onPress } = this.props;
        if (enabled) {
            onPress(tileValue);
        }
    };

    render() {
        const { tileValue } = this.props;

        return (
            <TouchableHighlight
                style={styles.tile}
                onPress={this.move}
                underlayColor="#f44336"
            >
                <Text style={styles.value}>{tileValue}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    tile: {
        alignItems: 'center',
        backgroundColor: '#d32f2f',
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        margin: 5,
        width: 50,
    },
    value: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
