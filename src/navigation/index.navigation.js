import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth.navigator';
import FeedNavigator from './feed.navigator';
import SidebarNavigator from './sidebar.navigator';
import ForumNavigator from './forum.navigator';
import * as screens from 'config/screens';

const RootNavigator = createSwitchNavigator(
  {
    [screens.AUTH]: AuthNavigator,
    [screens.FEED]: FeedNavigator,
    [screens.SIDEBAR]: SidebarNavigator,
    [screens.FORUM]: ForumNavigator,
  },
  {
    initialRouteName: screens.FORUM,
  },
);

export default createAppContainer(RootNavigator);
