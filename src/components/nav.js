import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import App from '../../App';
import Page2 from '../pages/page2';

const root = StackNavigator({
  One: {screen: App},
  Tow: {screen: Page2},
});

AppRegistry.registerComponent('root', () => root);
