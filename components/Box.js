import React from 'react';
import styled from 'styled-components';
import { space, width, color, textAlign } from 'styled-system';

const Box = styled.div`
  ${space} 
  ${width} 
  ${color} 
  ${textAlign}
`;

Box.displayName = 'Box';

export default Box;
