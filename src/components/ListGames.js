import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-primitives';
import { Button, FlatList, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export default class ListGames extends Component {
    static propTypes = {
        onGameSelected: PropTypes.func.isRequired,
        gameIds: PropTypes.array.isRequired,
    };

    keyExtractor = item => item.id;

    renderItem = ({ item }) => {
        const { onGameSelected } = this.props;

        return (
            <TouchableHighlight
                key={item.id}
                title={item.id}
                style={styles.itemContainer}
            >
                <View style={styles.item}>
                    <Text style={styles.value}>{`Game #${item.id}`}</Text>
                    <Button
                        style={styles.join}
                        title="Join this game"
                        onPress={onGameSelected}
                    />
                </View>
            </TouchableHighlight>
        );
    };

    render() {
        return (
            <FlatList
                data={this.props.gameIds}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 50,
        width: '100%',
    },
    item: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    join: {
        width: 100,
    },
});
