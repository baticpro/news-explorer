import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {WelcomeScreen} from "./welcome/screens/WelcomeScreen";

const routes = {
  Welcome: {
    screen: WelcomeScreen
  },
};

const config = {
  initialRouteName: 'Welcome'
};

const rootNavigator = createStackNavigator(routes);

export const NavigatorContainer = createAppContainer(rootNavigator);
