import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-primitives';
import { Button, FlatList } from 'react-native';
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
            <View style={styles.item} key={item.id}>
                <Text style={styles.value}>{`Game #${item.id}`}</Text>
                <Button
                    style={styles.join}
                    title="Join this game"
                    onPress={() => onGameSelected(item.id)}
                />
            </View>
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
    item: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    join: {
        width: 100,
    },
});
