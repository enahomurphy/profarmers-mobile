import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const LogoView = styled(View)`
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const TextView = styled(View)`
  align-items: center;
  margin-bottom: 40px;
  text-transform: capitalize;
`;

export default StyleSheet.create({
  contentWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  viewWrapper: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.9,
  },
  viewTextWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  formButton: {
    marginTop: 60,
  },
  title: {
    color: '#47682C',
    marginBottom: 10,
  },
  content: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
});
