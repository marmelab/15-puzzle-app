import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-primitives';
import PropTypes from 'prop-types';

import Tile from './Tile';

export default class Grid extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        grid: PropTypes.array.isRequired,
        readOnly: PropTypes.bool,
    };

    static defaultProps = {
        readOnly: true,
    };

    render() {
        return this.props.grid.forEach(row => {
            <Text style={styles.row}>
                {row.forEach(value => {
                    <Tile
                        tileValue={value}
                        enabled={!this.props.readOnly}
                        onPress={this.props.onPress}
                    />;
                })}
            </Text>;
        });
    }
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
    },
});
