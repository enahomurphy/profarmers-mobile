import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = ({width, height}) => `
  <svg width=${width} height=${height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="black"/>
  </svg>
`;

const Sort = ({width, height}) => (
  <SvgXml xml={xml({width, height})} width={width} height={height} />
);

Sort.defaultProps = {
  width: '24',
  height: '24',
};

export default Sort;
