import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  contentWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
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
  title: {
    color: '#47682C',
    marginBottom: 10,
  },
  content: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
});
