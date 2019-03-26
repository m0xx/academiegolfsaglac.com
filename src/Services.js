import React from 'react';
import styled, {css, withTheme} from 'styled-components';

import Header from './Header';
import Flex from './Flex'
import Box from './Box'
import { space, textAlign } from 'styled-system'
import Container from './Container';
import Heading from "./Heading";
import Text from "./Text";
import Button from "./Button";
import Paper from "./Paper";

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

const Card = ({children}) => {
    return <Paper elevation={3} p={4} style={{textAlign: 'center', display: 'inline-block'}}>
        { children }
    </Paper>
}

const Price = styled.div`
    font-size: 4rem;
    font-weight: bold;
`

const PriceCard = ({title, text, price}) => {
    return <Card>
        <Heading.H3 mb={2} textStyle="display5">{ title }</Heading.H3>
        <Text.P mb={3}>{ text }</Text.P>
        <Price>{ price }</Price>
    </Card>
}

function App({theme}) {
    console.log('theme', theme)
    return <Layout>
        <Header />
        <Content >
            <Section >
                    <Box style={{
                        background: `linear-gradient(180deg, ${theme.colors.blue} 60%, ${theme.colors.white} 50%)`
                    }} px={3} pb={6}>
                        <Heading.H2 textStyle="display7" mb={3}>
                            Cours de golf
                        </Heading.H2>
                        <Text.P textStyle="body2" mb={3} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            nec velit metus. Phasellus quis condimentum elit. Vivamus
                            convallis lacus mi, a varius ligula egestas et.
                        </Text.P>
                        <Flex >
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
                    </Box>
            </Section>
        </Content>
    </Layout>
}

export default withTheme(App)