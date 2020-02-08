import {createDrawerNavigator} from 'react-navigation-drawer';

import {SidebarNavigatorConfig, SidebarRouteConfigs} from './sidebar.navigator';
import ForumScreen from 'screens/Forum';
import ForumTopicsScreen from 'screens/Forum/Topics';
import CreateForumScreen from 'screens/Forum/Create';
import TopicScreen from 'screens/Feed/Topic';
import * as screens from 'config/screens';

const ForumNavigatorConfig = {
  initialRouteName: screens.LIST_FORUM,
  ...SidebarNavigatorConfig,
};

const RouteConfigs = {
  [screens.LIST_FORUM]: ForumScreen,
  [screens.CREATE_FORUM]: CreateForumScreen,
  [screens.FORUM_TOPICS]: ForumTopicsScreen,
  [screens.TOPIC]: {
    screen: TopicScreen,
  },
  ...SidebarRouteConfigs,
};

export default createDrawerNavigator(RouteConfigs, ForumNavigatorConfig);
