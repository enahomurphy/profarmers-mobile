import React from 'react';
import {Label, Input, Icon} from 'native-base';

import {StyledItem} from './styles';

const CustomInput = ({label, success, ...props}) => {
  return (
    <StyledItem {...props} success={success} floatingLabel last>
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
