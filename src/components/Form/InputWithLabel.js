import React from 'react';
import styled from 'styled-components';
import {Item, Label, Input} from 'native-base';

const StyledItem = styled(Item)`
  border-color: red;
`;

const CustomInput = ({label}) => {
  return (
    <StyledItem floatingLabel last>
      <Label>{label}</Label>
      <Input />
    </StyledItem>
  );
};

export default CustomInput;
