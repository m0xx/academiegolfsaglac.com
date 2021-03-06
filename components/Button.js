import styled, { css } from 'styled-components';
import { width, space } from 'styled-system';

const createVariant = (variant, color, hoverTextColor = 'white', fill = false) => {
    return props =>
        props.variant === variant &&
        css`
        box-shadow: ${color} 0px 0px 0px 3px inset
        color: ${props => (fill ? hoverTextColor : props.theme.colors[color])};
        background-color: ${props => (fill ? props.theme.colors[color] : 'transparent')};
            
        &:hover {
            background-color: ${props => props.theme.colors[color]};
            color: ${props => props.theme.colors[hoverTextColor]};
        }
    `;
};

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
  font-size: ${props => props.theme.fontSizes[3]}px;
  padding-top: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  padding-left: ${props => props.theme.space[4]}px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  
  transition: color .15s ease-in-out,background-color .15s ease-in-out;
  
  ${createVariant('primary', 'black', 'white')}
  ${createVariant('secondary', 'white', 'black')}
  ${createVariant('primary-fill', 'black', 'white', true)}

  ${width} 
  ${space}
`;

Button.Link = Button.withComponent('a');

Button.displayName = 'Button';

Button.defaultProps = {
    variant: 'primary'
};

export default Button;
