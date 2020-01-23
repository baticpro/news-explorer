import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {WelcomeScreen} from './welcome/screens/WelcomeScreen';
import {DetailScreen} from './detail/screens/DetailScreen';

const routes = {
  Welcome: {
    screen: WelcomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
};

const config = {
  initialRouteName: 'Welcome',
};

const rootNavigator = createStackNavigator(routes, config);

export const NavigatorContainer = createAppContainer(rootNavigator);
