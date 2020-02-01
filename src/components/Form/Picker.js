import React from 'react';
import styled from 'styled-components';
import {Item, Icon, Picker} from 'native-base';

import color from 'config/color';

const StyledItem = styled(Item)`
  background: ${color.light.inputBackground};
  padding-bottom: 10px;
  padding: 0;
`;

type Option = {
  value: string,
  label: string,
};

type Props = {
  rowSpan: number,
  placeholder: string,
  success: Boolean,
  label: string,
  options: Array<Option>,
};

const CustomPicker = (props: Props) => {
  const {success, options, placeholder} = props;
  return (
    <StyledItem success={success} picker>
      <Picker
        mode="dialog"
        iosIcon={<Icon name="arrow-down" />}
        placeholder={placeholder}
        {...props}>
        {options.map(({value, label}) => (
          <Picker.Item key={label} label={label} value={value} />
        ))}
      </Picker>
    </StyledItem>
  );
};

CustomPicker.defaultProps = {
  success: true,
  onValueChange: () => {},
};

export default CustomPicker;
