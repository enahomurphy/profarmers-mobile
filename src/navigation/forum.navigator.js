import {createStackNavigator} from 'react-navigation-stack';

import ForumScreen from 'screens/Forum';
import * as screens from 'config/screens';

const ForumNavigatorConfig = {
  initialRouteName: screens.FORUM_LIST,
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  [screens.FORUM_LIST]: ForumScreen,
};

export default createStackNavigator(RouteConfigs, ForumNavigatorConfig);
