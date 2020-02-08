import {createDrawerNavigator} from 'react-navigation-drawer';

import FeedScreen from 'screens/Feed';
import TopicScreen, {Create, Reply} from 'screens/Feed/Topic';
import {SidebarNavigatorConfig, SidebarRouteConfigs} from './sidebar.navigator';
import * as screens from 'config/screens';

const FeedNavigatorConfig = {
  initialRouteName: screens.REPLY_TOPIC,
  ...SidebarNavigatorConfig,
};

const RouteConfigs = {
  [screens.DISCUSSION]: {
    screen: FeedScreen,
  },
  [screens.TOPIC]: {
    screen: TopicScreen,
  },
  [screens.CREATE_TOPIC]: {
    screen: Create,
  },
  [screens.REPLY_TOPIC]: {
    screen: Reply,
  },
  ...SidebarRouteConfigs,
};

export default createDrawerNavigator(RouteConfigs, FeedNavigatorConfig);
