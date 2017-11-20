import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-primitives';
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

    move() {
        if (this.props.enabled) {
            this.props.onPress(this.props.tileValue);
        }
    }

    render() {
        return (
            <Text style={styles.tile} onPress={this.move}>
                <Text style={styles.value}>{this.props.tileValue}</Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    tile: {
        alignIitems: 'center',
        display: 'flex',
        fontSize: '28',
        height: '150',
        justifyContent: 'center',
        margin: '3',
        width: '150',
    },
    value: {
        alignItems: 'center',
        backgroundColor: '#d32f2f',
        color: 'white',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
});
