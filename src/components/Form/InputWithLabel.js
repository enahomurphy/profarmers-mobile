import React from 'react';
import styled from 'styled-components';
import {Item, Label, Input, Icon} from 'native-base';

import color from 'config/color';

const StyledItem = styled(Item)`
  background: ${color.light.inputBackground};
  padding-bottom: 10px;
  height: 60px;
  margin-bottom: 20px;
  margin-top: 0px;
`;

const CustomInput = ({label, success, ...props}) => {
  return (
    <StyledItem success={success} floatingLabel last>
      <Label>{label}</Label>
      <Input {...props} />
      {success && <Icon name="checkmark-circle" />}
    </StyledItem>
  );
};

CustomInput.defaultProps = {
  success: false,
};

export default CustomInput;
