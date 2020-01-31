import {Text} from 'native-base';
import styled from 'styled-components/native';
import color from 'config/color';

export const Title = styled(Text)`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  color: ${({theme}) => color[theme].headerText};
`;

export const Paragraph = styled(Title)`
  font-size: 16px;
  line-height: 26px;
  font-weight: normal;
  color: ${({theme}) => color[theme].headerText};
`;

Title.defaultProps = {
  theme: 'light',
};

Paragraph.defaultProps = {
  theme: 'light',
};
