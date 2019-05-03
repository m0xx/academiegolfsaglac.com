import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { space, textAlign } from 'styled-system';

import Header from './../components/Header';
import Flex from './../components/Flex';
import Box from './../components/Box';
import Container from './../components/Container';
import Heading from './../components/Heading';
import Text from './../components/Text';
import Button from './../components/Button';
import Paper from './../components/Paper';
import HeaderImage from '../components/HeaderImage';
import Footer from '../components/Footer';

const Layout = styled.div``;

const Content = styled.div``;

const Section = styled.div`
    ${space}

    ${props =>
        props.variant === 'primary' &&
        css`
            background-color: ${props.theme.colors.blue};
            color: ${props.theme.colors.white};
        `}
`;

const Price = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

const Card = ({ children }) => {
    return (
        <Paper elevation={3} p={4} style={{ textAlign: 'center', display: 'inline-block' }}>
            {children}
        </Paper>
    );
};

const PriceCard = ({ title, text, price }) => {
    return (
        <Card>
            <Heading.H3 mb={2} textStyle="display5">
                {title}
            </Heading.H3>
            <Text.P mb={3}>{text}</Text.P>
            <Price>{price}</Price>
        </Card>
    );
};

function App({ theme }) {
    return (
        <Layout>
            <Header />
            <Content>
                <HeaderImage />
                <Section mt={4}>
                    <Container>
                        <Box px={3}>
                            <Heading.H2 textStyle="display7" mb={3}>
                                Cours de golf
                            </Heading.H2>
                            <Text.P textStyle="body2" mb={3}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus.
                                Phasellus quis condimentum elit. Vivamus convallis lacus mi, a varius ligula egestas et.
                            </Text.P>
                        </Box>
                        <Flex>
                            <Box width={1 / 3} px={3}>
                                <PriceCard
                                    title="Privé"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus."
                                    price="299$"
                                />
                            </Box>
                            <Box width={1 / 3} px={3}>
                                <PriceCard
                                    title="Semi-Privé"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus."
                                    price="299$"
                                />
                            </Box>
                            <Box width={1 / 3} px={3}>
                                <PriceCard
                                    title="Groupe"
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus."
                                    price="299$"
                                />
                            </Box>
                        </Flex>
                    </Container>
                </Section>
                <Section variant="primary" mt={5}>
                    <Container>
                        <Flex py={5} alignItems="center">
                            <Box width={6 / 10} px={3}>
                                <Heading.H2 textStyle="display7" mb={3}>
                                    Programme Excellence
                                </Heading.H2>
                                <Text.P textStyle="body2" style={{ maxWidth: 600 }} variant="light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus.
                                    Phasellus quis condimentum elit. Vivamus convallis lacus mi, a varius ligula egestas
                                    et.
                                </Text.P>
                            </Box>
                            <Box width={4 / 10} px={3} style={{ textAlign: 'center' }}>
                                <Price>299$</Price>
                                <Button mt={3} variant="secondary">
                                    TÉLÉCHARGER FORMULAIRE
                                </Button>
                            </Box>
                        </Flex>
                    </Container>
                </Section>
                <Section py={5}>
                    <Container>
                        <Flex>
                            <Box width={1 / 2}>
                                <Card>
                                    <Heading.H3 textStyle="display7" mb={3}>
                                        Cours du lundi
                                    </Heading.H3>
                                    <Text.P mb={3} textStyle="body2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit
                                        metus. Phasellus quis condimentum elit. Vivamus
                                    </Text.P>
                                    <Price>299$</Price>
                                    <Button mt={3}>TÉLÉCHARGER FORMULAIRE</Button>
                                </Card>
                            </Box>
                            <Box width={1 / 2} p={4} style={{ textAlign: 'center' }}>
                                <Heading.H3 textStyle="display7" mb={3}>
                                    Sports-études
                                </Heading.H3>
                                <Text.P mb={3} textStyle="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus.
                                    Phasellus quis condimentum elit. Vivamus
                                </Text.P>
                                <Price>299$</Price>
                                <Button mt={3}>TÉLÉCHARGER FORMULAIRE</Button>
                            </Box>
                        </Flex>
                    </Container>
                </Section>
                <Section>
                    <Container>
                        <Box {...theme.colorStyles.whiteOnBlue} p={4} style={{ textAlign: 'center' }}>
                            <Heading.H2 textStyle="display7" mb={3}>
                                Camp de jour
                            </Heading.H2>
                            <Text.P textStyle="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                Curabitur nec velit metus
                            </Text.P>
                            <Button mt={3} variant="secondary">
                                PLUS DE DÉTAILS
                            </Button>
                        </Box>
                    </Container>
                </Section>
            </Content>
            <Footer />
        </Layout>
    );
}

export default withTheme(App);
