import {StyleSheet} from 'react-native';
import {Button, View} from 'native-base';
import styled from 'styled-components/native';

import color from 'config/color';

export const AuthButtons = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialButton = styled(Button)`
  width: 350px;
  background-color: ${({theme, bgColor}) => color[theme][bgColor]};
  margin-bottom: 10px;
  align-self: center;
`;

export default StyleSheet.create({
  contentWrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  viewWrapper: {
    height: 320,
  },
});
