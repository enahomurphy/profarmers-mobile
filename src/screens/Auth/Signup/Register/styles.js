import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {Paragraph} from 'components/Text';

export const LogoView = styled(View)`
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const TextView = styled(View)`
  align-items: center;
`;

export const ParagraphSigninText = styled(Paragraph)`
  margin-left: 5px;
  color: #686666;
`;

export default StyleSheet.create({
  contentWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    height: Dimensions.get('window').height * 0.9,
  },
  viewWrapper: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
  viewTextWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  formButton: {
    marginTop: 60,
  },
});
