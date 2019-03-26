import React from 'react';
import styled from 'styled-components';
import { space, width, color, textAlign, alignItems, justifyContent, flexWrap, flexDirection } from 'styled-system';


const Flex = styled.div`
  display: flex;
  ${space} 
  ${width} 
  ${color} 
  ${alignItems} 
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`;

Flex.displayName = 'Flex';

export default Flex;
