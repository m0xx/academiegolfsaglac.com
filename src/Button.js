import styled, { css } from 'styled-components';
import { width, space } from 'styled-system';

const variant = props => {
    switch (props.variant) {
        case 'primary':
            return css`
                color: red;
            `
        case 'secondary':
            return css`
                color: blue;
            `
    }
}

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-width: 0;
  border-style: solid;
  
  ${width} 
  ${space}
  ${variant}
`;

Button.Link = Button.withComponent('a');

Button.displayName = 'Button';

Button.defaultProps = {
    variant: 'primary'
}



export default Button;
