import {createDrawerNavigator} from 'react-navigation-drawer';

import MessageScreen from 'screens/Message';
import ProfileScreen from 'screens/Profile';
import SettingsScreen from 'screens/Settings';
import Sidebar from 'screens/Sidebar';
import color from 'config/color';
import * as screens from 'config/screens';

const SidebarNavigatorConfig = {
  initialRouteName: screens.MESSAGE,
  contentComponent: Sidebar,
  contentOptions: {
    activeTintColor: color.light.base,
  },
};

const RouteConfigs = {
  [screens.MESSAGE]: {
    screen: MessageScreen,
  },
  [screens.PROFILE]: {
    screen: ProfileScreen,
  },
  [screens.SETTING]: {
    screen: SettingsScreen,
  },
};

export default createDrawerNavigator(RouteConfigs, SidebarNavigatorConfig);
