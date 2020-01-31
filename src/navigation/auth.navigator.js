import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from 'screens/Auth/Login';
import SignupScreen from 'screens/Auth/Signup';

const AuthNavigatorConfig = {
  initialRouteName: 'Signup',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  Signup: SignupScreen,
};

export default createStackNavigator(RouteConfigs, AuthNavigatorConfig);
