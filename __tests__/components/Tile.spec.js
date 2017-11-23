import 'react-native';
import React from 'react';
import Tile from '../../src/components/Tile';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('should render Tile correctly', () => {
    renderer.create(<Tile onPress={() => {}} tileValue={10} />);
});

it('should match snapshot', () => {
    const tree = renderer
        .create(<Tile onPress={() => {}} tileValue={12} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
