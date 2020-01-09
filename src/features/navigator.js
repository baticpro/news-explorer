import {createStackNavigator} from 'react-navigation-stack';
import {WelcomeScreen} from "./welcome/screens/WelcomeScreen";

const routes = {
  Welcome: {
    screen: WelcomeScreen
  },
};

const config = {
  initialRouteName: 'Welcome'
};

export default createStackNavigator(routes);
