import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

import MessageScreen from 'screens/Message';
import ProfileScreen from 'screens/Profile';
import SettingsScreen from 'screens/Settings';
import ForumScreen from 'screens/Forum';
import FeedScreen from 'screens/Feed';
import Sidebar from 'screens/Sidebar';
import color from 'config/color';
import * as screens from 'config/screens';

export const SidebarNavigatorConfig = {
  contentComponent: Sidebar,
  drawerWidth: Dimensions.get('window').width * 0.9,
  contentOptions: {
    activeTintColor: color.light.base,
  },
};

export const SidebarRouteConfigs = {
  [screens.MESSAGE]: {
    screen: MessageScreen,
  },
  [screens.PROFILE]: {
    screen: ProfileScreen,
  },
  [screens.SETTING]: {
    screen: SettingsScreen,
  },
  [screens.LIST_FORUM]: {
    screen: ForumScreen,
  },
  [screens.DISCUSSION]: {
    screen: FeedScreen,
  },
};

export default createDrawerNavigator(
  SidebarRouteConfigs,
  SidebarNavigatorConfig,
);
