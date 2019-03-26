import React from 'react';
import styled from 'styled-components';
import { space, width, color, textAlign } from 'styled-system';

const Paper = styled.div`
    ${space}
    ${textAlign}
    box-shadow: ${props => props.theme.boxShadows[props.elevation]}
`;
Paper.defaultProps = {
    elevation: 1
};

Paper.displayName = 'Paper';

export default Paper;
