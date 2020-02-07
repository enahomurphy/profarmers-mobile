import React from 'react';
import styled from 'styled-components/native';
import {Body} from 'native-base';

const SectionWrapper = styled(Body)`
  align-items: ${({align}) => align};
  width: ${({width}) => width};
  margin-top: ${({marginTop}) => marginTop};
  margin-bottom: ${({marginBottom}) => marginBottom};
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justify}) => justify};
`;

type Props = {
  children: React.Node,
  align: String,
  width: String,
  marginBottom: String,
  marginTop: String,
  direction: String,
};

const Section = (props: Props) => (
  <SectionWrapper {...props}>{props.children}</SectionWrapper>
);

Section.defaultProps = {
  align: 'flex-start',
  justify: 'flex-start',
  width: '91%',
  marginTop: '0px',
  marginBottom: '0px',
  flexDirection: 'column',
};

export default Section;
