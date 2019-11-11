import 'react-native';
import React from 'react';
import ListGames from '../../src/components/ListGames';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('should render the ListGames correctly', () => {
    renderer.create(<ListGames onGameSelected={() => {}} gameIds={[]} />);
});

it('should match snapshot', () => {
    const gameIds = [1, 2, 3, 4];
    const tree = renderer
        .create(<ListGames onGameSelected={() => {}} gameIds={gameIds} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
