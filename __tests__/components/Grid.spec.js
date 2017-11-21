import 'react-native';
import React from 'react';
import Grid from '../../src/components/Grid';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('should render Grid correctly', () => {
    renderer.create(<Grid onPress={() => {}} grid={[]} />);
});
