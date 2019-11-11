import 'react-native';
import React from 'react';
import Grid from '../../src/components/Grid';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('should render Grid correctly', () => {
    renderer.create(<Grid onPress={() => {}} grid={[]} />);
});

it('should match snapshot', () => {
    const grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    const tree = renderer
        .create(<Grid onPress={() => {}} grid={grid} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
