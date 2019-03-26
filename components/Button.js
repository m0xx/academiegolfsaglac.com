import styled, { css } from 'styled-components';
import { width, space } from 'styled-system';

const createVariant = (variant, color, hoverTextColor = 'white') => {
    return props => props.variant === variant && css`
        box-shadow: ${color} 0px 0px 0px 3px inset
        color: ${props => props.theme.colors[color]};
    
        &:hover {
            background-color: ${props => props.theme.colors[color]};
            color: ${props => props.theme.colors[hoverTextColor]};
        }
    `
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
  font-size: ${props => props.theme.fontSizes[3]};
  padding-top: ${props => props.theme.space[2]};
  padding-right: ${props => props.theme.space[4]};
  padding-bottom: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[4]};
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  
  transition: color .15s ease-in-out,background-color .15s ease-in-out;
  
  ${createVariant('primary', 'black', 'white')}
  ${createVariant('secondary', 'white', 'black')}

  ${width} 
  ${space}
`;

Button.Link = Button.withComponent('a');

Button.displayName = 'Button';

Button.defaultProps = {
    variant: 'primary'
}



export default Button;
