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
        return (
            <View style={styles.column}>
                {this.props.grid.map((row, rowKey) => {
                    return (
                        <View style={styles.row} key={rowKey}>
                            {row.map((tileValue, tileKey) => {
                                if (tileValue === 0) {
                                    return;
                                }
                                return (
                                    <Tile
                                        key={tileKey}
                                        tileValue={tileValue}
                                        enabled={!this.props.readOnly}
                                        onPress={this.props.onPress}
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
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        margin: 3,
    },
});
