import styled from 'styled-components';
import {Item} from 'native-base';
import {StyleSheet} from 'react-native';
import {light} from 'config/color';

export const StyledItem = styled(Item)`
  background: ${light.inputBackground};
  padding-bottom: 10px;
  height: 60px;
  margin-bottom: ${props => (props.end ? 0 : '20px')};
  margin-top: 0px;
`;

export default StyleSheet.create({
  tagsView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    height: 30,
    borderRadius: 13,
    backgroundColor: light.base,
    minWidth: 40,
    maxWidth: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingLeft: 10,
  },
  tagText: {
    color: '#ffffff',
  },
  tagIcon: {
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
