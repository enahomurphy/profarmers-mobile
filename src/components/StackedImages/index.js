import React from 'react';
import styled from 'styled-components';
import {Thumbnail, View, Text} from 'native-base';
import {Paragraph} from 'components/Text';

const StackedAvatarWrapper = styled(View)`
  flex-direction: row;
`;

const StackedImages = styled(View)`
  flex-direction: row;
  margin-left: 10px;
`;

const StyledThumbnail = styled(Thumbnail)`
  position: absolute;
  z-index: ${props => props.adjust};
  left: ${({adjust, avatarWidth, stagedPadding}) =>
    `${adjust * (avatarWidth / 2 + stagedPadding)}px`};
  width: ${props => props.width};
  height: ${props => props.height};
`;

const StackedAvatartext = styled(View)`
  flex-direction: row;
`;

const StackedAvatar = (props: Props) => {
  const {avatars, avatarWidth, stagedPadding, count} = props;

  return (
    <StackedAvatarWrapper>
      <StackedAvatartext>
        <Paragraph>{`${count} ${props.text}`}</Paragraph>
        <Text>{}</Text>
      </StackedAvatartext>
      <StackedImages>
        {avatars.map(({src}, index) => (
          <StyledThumbnail
            key={index}
            adjust={index}
            icon="user"
            source={{uri: src}}
            avatarWidth={avatarWidth}
            width={`${avatarWidth}px`}
            height={`${avatarWidth}px`}
            stagedPadding={stagedPadding}
          />
        ))}
      </StackedImages>
    </StackedAvatarWrapper>
  );
};

type AvatarData = {
  src: String,
  alt: String,
};

type Props = {
  avatars: Array<AvatarData>,
  avatarWidth: Number,
  stagedPadding: Number,
  count: Number,
  text: String,
  width: String,
};

StackedAvatar.defaultProps = {
  avatarWidth: 23,
  stagedPadding: 5,
  width: '250px',
  count: 30,
  text: 'Topics',
  avatars: [
    {
      src: 'https://randomuser.me/api/portraits/men/93.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/93.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/91.jpg',
    },
  ],
};

export default StackedAvatar;
