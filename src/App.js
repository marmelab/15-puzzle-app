import { StackNavigator } from 'react-navigation';

import HomeScreen from './routes/HomeScreen';
import GameScreen from './routes/GameScreen';
import GamesScreen from './routes/GamesScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
    Games: { screen: GamesScreen },
});

export default App;
