import { StackNavigator } from 'react-navigation';

import HomeScreen from './routes/HomeScreen';
import GameScreen from './routes/GameScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
});

export default App;
