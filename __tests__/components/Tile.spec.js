import 'react-native';
import React from 'react';
import Tile from '../../src/components/Tile';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('should render Tile correctly', () => {
    renderer.create(<Tile onPress={() => {}} tileValue={10} />);
});
