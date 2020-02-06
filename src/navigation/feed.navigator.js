import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

import FeedScreen from 'screens/Feed';
import MessageScreen from 'screens/Message';
import ProfileScreen from 'screens/Profile';
import SettingsScreen from 'screens/Settings';
import TopicScreen, {Create} from 'screens/Feed/Topic';
import Sidebar from 'screens/Sidebar';
import color from 'config/color';
import * as screens from 'config/screens';

const FeedNavigatorConfig = {
  initialRouteName: screens.CREATE_TOPIC,
  contentComponent: Sidebar,
  drawerWidth: Dimensions.get('window').width * 0.9,
  contentOptions: {
    activeTintColor: color.light.base,
  },
};

const RouteConfigs = {
  [screens.DISCUSSION]: {
    screen: FeedScreen,
  },
  [screens.MESSAGE]: {
    screen: MessageScreen,
  },
  [screens.PROFILE]: {
    screen: ProfileScreen,
  },
  [screens.SETTING]: {
    screen: SettingsScreen,
  },
  [screens.TOPIC]: {
    screen: TopicScreen,
  },
  [screens.CREATE_TOPIC]: {
    screen: Create,
  },
};

export default createDrawerNavigator(RouteConfigs, FeedNavigatorConfig);
