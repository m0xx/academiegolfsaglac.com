import React from 'react';
import styled, {css, withTheme} from 'styled-components';

import Header from './Header';
import {Header1, Header2, Paragraph} from './Typography'
import { Flex, Box } from '@rebass/grid'
import { space, textAlign } from 'styled-system'
import Container from './Container';
import Heading from "./Heading";
import Text from "./Text";

const Layout = styled.div`
`

const Content = styled.div`
    

`

const Section = styled.div`
    ${space}
    
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
    ${space}
    ${textAlign}
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`

const Price = styled.div`
    font-size: 4rem;
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
    color: ${props => props.theme.buttons[props.variant].color};
    padding: ${props => props.theme.space[2]};
    margin-top: ${props => props.theme.space[3]};
    transition: color .15s ease-in-out,background-color .15s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.buttons[props.variant].color};
        color: ${props => props.theme.buttons[props.variant].hoverColor};
    }
`

Button.defaultProps = { variant: 'primary' }
function App({theme}) {
    console.log('theme', theme)
    return <Layout>
        <Header />
        <Content >
            <HeaderImage  />
            <Section py={4}>
                <Container>
                    <Box px={3}>
                        <Heading.H2 textStyle="display6">
                            Cours de golf
                        </Heading.H2>
                        <Text textStyle="body0" style={{maxWidth: 600}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            nec velit metus. Phasellus quis condimentum elit. Vivamus
                            convallis lacus mi, a varius ligula egestas et.
                        </Text>
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
                </Container>
            </Section>
            <Section variant="primary" py={4}>
                <Container>
                    <Flex alignItems="center">
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
                </Container>
            </Section>
            <Section py={4}>
                <Container>
                    <Flex>
                        <Box width={1/2} >
                            <Paper p={4} textAlign="center">
                                <Header1>Cours du lundi</Header1>
                                <Paragraph>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur nec velit metus.
                                    Phasellus quis condimentum elit. Vivamus</Paragraph>
                                <Price>299$</Price>
                                <Button>TÉLÉCHARGER FORMULAIRE</Button>
                            </Paper>
                        </Box>
                        <Box width={1/2} p={4} style={{textAlign: 'center'}}>
                            <Header1>Sports-études</Header1>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur nec velit metus.
                                Phasellus quis condimentum elit. Vivamus</Paragraph>
                            <Price>299$</Price>
                            <Button>TÉLÉCHARGER FORMULAIRE</Button>
                        </Box>
                    </Flex>
                </Container>
            </Section>
            <Section>
                <Container >
                    <Box {...theme.colorStyles.whiteOnBlue} p={4} style={{textAlign: 'center'}}>
                        <Header2>Camp de jour</Header2>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Curabitur nec velit metus
                        </Paragraph>
                        <Button variant="secondary">
                            PLUS DE DÉTAILS
                        </Button>
                    </Box>
                </Container>
            </Section>
        </Content>
    </Layout>
}

export default withTheme(App)