import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from 'screens/Auth/Login';
import SignupScreen from 'screens/Auth/Signup';
import RegisterScreen from 'screens/Auth/Signup/Register';
import CompleteScreen from 'screens/Auth/Signup/Complete';
import * as screens from 'config/screens';

const AuthNavigatorConfig = {
  initialRouteName: screens.SIGNUP_REGISTER,
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  [screens.LOGIN]: LoginScreen,
  [screens.SIGNUP]: SignupScreen,
  [screens.SIGNUP_REGISTER]: RegisterScreen,
  [screens.SIGNUP_COMPLETE]: CompleteScreen,
};

export default createStackNavigator(RouteConfigs, AuthNavigatorConfig);
