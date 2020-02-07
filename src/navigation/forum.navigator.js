import {createStackNavigator} from 'react-navigation-stack';

import ForumScreen from 'screens/Forum';
import CreateForumScreen from 'screens/Forum/Create';
import Topiccreen from 'screens//Feed/Topic';
import * as screens from 'config/screens';

const ForumNavigatorConfig = {
  initialRouteName: screens.FORUM_CREATE,
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  [screens.FORUM_LIST]: ForumScreen,
  [screens.FORUM_CREATE]: CreateForumScreen,
  [screens.TOPIC]: Topiccreen,
};

export default createStackNavigator(RouteConfigs, ForumNavigatorConfig);
