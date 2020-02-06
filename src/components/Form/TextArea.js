import React from 'react';
import styled from 'styled-components';
import {Textarea, Item, Label, Icon} from 'native-base';

import color from 'config/color';

const StyledTextArea = styled(Textarea)`
  padding-top: 40px;
  background: ${color.light.inputBackground};
  width: 100%;
`;

const StyledLabel = styled(Label)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`;

const StyledItem = styled(Item)`
  background: ${color.light.inputBackground};
  padding-bottom: 10px;
  padding: 0;
  margin-bottom: ${props => (props.end ? 0 : '20px')};
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0;
  top: 10px;
`;

type Props = {
  rowSpan: number,
  placeholder: string,
  success: Boolean,
  label: string,
};

const CustomTextArea = (props: Props) => {
  const {success, label} = props;
  return (
    <StyledItem {...props} success={success} last>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea {...props} />
      {success && <StyledIcon name="checkmark-circle" />}
    </StyledItem>
  );
};

CustomTextArea.defaultProps = {
  rowSpan: 5,
  success: false,
};

export default CustomTextArea;
