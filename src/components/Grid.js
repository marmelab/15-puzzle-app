import React, { Component } from 'react';
import { StyleSheet, View } from 'react-primitives';
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
        const { grid, readOnly, onPress } = this.props;

        return (
            <View style={styles.column}>
                {grid.map((row, rowKey) => {
                    return (
                        <View style={styles.row} key={rowKey}>
                            {row.map(tileValue => {
                                if (tileValue === 0) {
                                    return (
                                        <View
                                            key={tileValue}
                                            style={styles.empty}
                                        />
                                    );
                                }
                                return (
                                    <Tile
                                        key={tileValue}
                                        tileValue={tileValue}
                                        enabled={!readOnly}
                                        onPress={onPress}
                                    />
                                );
                            })}
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    column: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        width: '100%',
    },
    empty: {
        height: 60,
        margin: 4,
        width: 60,
    },
    row: {
        flexDirection: 'row',
    },
});
