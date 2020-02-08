import React from 'react';
import styled from 'styled-components/native';
import {ListItem, Body, View} from 'native-base';

import StackedImages from 'components/StackedImages';
import {Title} from 'components/Text';

type Props = {
  title: Boolean,
  onPress: () => {},
};

const StyledBody = styled(Body)`
  border-color: #ffffff;
  margin-bottom: 10px;
`;

const StyleTitle = styled(View)`
  margin-top: 10px;
`;

const FeedItem = (props: Props) => {
  return (
    <ListItem avatar onPress={props.onPress}>
      <StyledBody>
        <Title size="16px">
          Poultry and fish farming in the southern parts of Africa{' '}
        </Title>
        <StyleTitle>
          <StackedImages />
        </StyleTitle>
      </StyledBody>
    </ListItem>
  );
};

FeedItem.defaultProps = {
  onPress: () => {},
};

export default FeedItem;
