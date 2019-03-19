import React from 'react';
import styled, {css} from 'styled-components';

import Header from './Header';
import {Header1, Header2, Paragraph} from './Typography'
import { Flex, Box } from '@rebass/grid'
import { space } from 'styled-system'

const Layout = styled.div`
`

const Content = styled.div`
    

`

const Section = styled.div`
    padding: 100px 0;
    
    ${props => props.variant === 'primary' && css`
        background-color: ${props.theme.colors.blue};
        color: ${props.theme.colors.white};
    `}
`

const HeaderImage = styled.div`
    width: 100%;
    height: 500px;
    background-image: url('https://images.unsplash.com/photo-1526166729864-ddc57657d48f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    background-size: cover;
    background-position: center;
`

const Paper = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`

const Price = styled.div`
    font-size: 3rem;
    font-weight: bold;
`

const PriceCard = ({title, text, price}) => {
    return <Paper style={{textAlign: 'center', display: 'inline-block', padding: 30}}>
        <Header2>{ title }</Header2>
        <Paragraph variant="light">{ text }</Paragraph>
        <Price>{ price }</Price>
    </Paper>
}


const Button = styled.button`
    border-style: solid;
    border-width: 3px;
    border-color: ${props => props.theme.buttons[props.variant].color};
    text-transform: uppercase;
    background-color: transparent;
    color: ${props => props.theme.buttons[props.variant].color}
    padding: ${props => props.theme.space[2]}
    margin-top: ${props => props.theme.space[3]}
    

`

Button.defaultProps = { variant: 'primary' }
export default function App() {
    return <Layout>
        <Header />
        <Content >
            <HeaderImage  />
            <Section>
                <Box px={3}>
                    <Header1>
                        Cours de golf
                    </Header1>
                    <Paragraph style={{maxWidth: 600}} variant="light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        nec velit metus. Phasellus quis condimentum elit. Vivamus
                        convallis lacus mi, a varius ligula egestas et.
                    </Paragraph>
                </Box>
                <Flex>
                    <Box width={1/3} px={3}>
                        <PriceCard title="Privé" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus." price="299$" />
                    </Box>
                    <Box width={1/3} px={3}>
                        <PriceCard title="Semi-Privé" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus." price="299$" />
                    </Box>
                    <Box width={1/3} px={3}>
                        <PriceCard title="Groupe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus." price="299$" />
                    </Box>
                </Flex>
            </Section>
            <Section variant="primary">
                <Flex>
                    <Box width={6/10} px={3}>
                        <Header1>
                            Programme Excellence
                        </Header1>
                        <Paragraph style={{maxWidth: 600}} variant="light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            nec velit metus. Phasellus quis condimentum elit. Vivamus
                            convallis lacus mi, a varius ligula egestas et.
                        </Paragraph>
                    </Box>
                    <Box width={4/10} px={3} style={{textAlign: 'center'}}>
                        <Price>299$</Price>
                        <Button variant="secondary">
                            TÉLÉCHARGER FORMULAIRE
                        </Button>
                    </Box>
                </Flex>
            </Section>
        </Content>
    </Layout>
}