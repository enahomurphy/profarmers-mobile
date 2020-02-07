import {createStackNavigator} from 'react-navigation-stack';

import ForumScreen from 'screens/Forum';
import ForumTopicsScreen from 'screens/Forum/Topics';
import CreateForumScreen from 'screens/Forum/Create';
import * as screens from 'config/screens';

const ForumNavigatorConfig = {
  initialRouteName: screens.FORUM_TOPICS,
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  [screens.LIST_FORUM]: ForumScreen,
  [screens.CREATE_FORUM]: CreateForumScreen,
  [screens.FORUM_TOPICS]: ForumTopicsScreen,
};

export default createStackNavigator(RouteConfigs, ForumNavigatorConfig);
