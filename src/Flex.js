import React from 'react';
import styled from 'styled-components';
import { space, width, color, textAlign, alignItems, justifyContent, flexWrap, flexDirection } from 'styled-system';

import { mapProps } from './utils';

const Flex = mapProps(({ wrap, align, justify, ...props }) => ({
    flexWrap: wrap ? 'wrap' : undefined,
    alignItems: align,
    justifyContent: justify,
    ...props
}))(styled.div`
  display: flex;
  ${space} 
  ${width} 
  ${color} 
  ${alignItems} 
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`);

Flex.displayName = 'Flex';

export default Flex;
