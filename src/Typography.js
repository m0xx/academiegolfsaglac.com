import styled, {css} from 'styled-components';

export const Header1 = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
`
export const Header2 = styled.h2`
    font-size: 2rem;
    font-weight: bold;
`
export const Header3 = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    
    ${props => props.variant === 'light' && css`
        opacity: 0.6;
    `}
`