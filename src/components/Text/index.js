import {Text} from 'native-base';
import styled from 'styled-components/native';
import color from 'config/color';

export const Title = styled(Text)`
  font-size: ${({size}) => size};
  line-height: 30px;
  font-weight: ${({weight}) => weight};
  color: ${({theme}) => color[theme].headerText};
`;

export const Paragraph = styled(Title)`
  font-size: 16px;
  line-height: 26px;
  font-weight: normal;
  color: ${({theme}) => color[theme].paragraphText};
  text-align: ${({align}) => align};
`;

Title.defaultProps = {
  theme: 'light',
  weight: 500,
  size: '24px',
};

Paragraph.defaultProps = {
  theme: 'light',
  align: 'left',
};
