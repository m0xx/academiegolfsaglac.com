import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import Header from './../components/Header';
import Flex from './../components/Flex';
import Box from './../components/Box';
import { space, textAlign } from 'styled-system';
import Container from './../components/Container';
import Heading from './../components/Heading';
import Text from './../components/Text';
import Paper from './../components/Paper';
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

const Card = ({ children }) => {
    return (
        <Paper
            elevation={3}
            p={4}
            style={{ textAlign: 'center', display: 'inline-block', backgroundColor: '#FFF', color: '#000' }}
        >
            {children}
        </Paper>
    );
};

const Price = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

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
                <Section>
                    <Box
                        style={{
                            background: `linear-gradient(180deg, ${theme.colors.blue} 60%, ${theme.colors.white} 50%)`
                        }}
                        px={3}
                    >
                        <Container>
                            <Flex style={{ color: '#FFF' }}>
                                <Box width={1} px={3} pt={5} pb={3}>
                                    <Heading.H2 textStyle="display7" mb={3}>
                                        Cours de golf
                                    </Heading.H2>
                                    <Text.P textStyle="body2" mb={3}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit
                                        metus. Phasellus quis condimentum elit. Vivamus convallis lacus mi, a varius
                                        ligula egestas et.
                                    </Text.P>
                                </Box>
                            </Flex>
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
                    </Box>
                    <Box px={3}>
                        <Container>
                            <Flex pt={5}>
                                <Box width={1 / 2} px={3}>
                                    <div
                                        style={{ height: 400, background: "url('https://via.placeholder.com/150')" }}
                                    />
                                </Box>
                                <Box width={1 / 2} px={3}>
                                    <Heading.H2 textStyle="display7" mb={3}>
                                        Cliniques
                                    </Heading.H2>
                                    <Text.P textStyle="body2" mb={3}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit
                                        metus. Phasellus quis condimentum elit. Vivamus convallis lacus mi, a varius
                                        ligula egestas et.
                                    </Text.P>
                                </Box>
                            </Flex>
                            <Flex pt={5}>
                                <Box width={1 / 2} px={3}>
                                    <Heading.H2 textStyle="display7" mb={3}>
                                        Boutique
                                    </Heading.H2>
                                    <Text.P textStyle="body2" mb={3}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit
                                        metus. Phasellus quis condimentum elit. Vivamus convallis lacus mi, a varius
                                        ligula egestas et.
                                    </Text.P>
                                    <Heading.H5 textStyle="display4" mb={3}>
                                        - Ajustement de bâton
                                    </Heading.H5>
                                    <Heading.H5 textStyle="display4" mb={3}>
                                        - Vêtements
                                    </Heading.H5>
                                    <Heading.H5 textStyle="display4" mb={3}>
                                        - Chaussures
                                    </Heading.H5>
                                </Box>
                                <Box width={1 / 2} px={3}>
                                    <div
                                        style={{ height: 400, background: "url('https://via.placeholder.com/150')" }}
                                    />
                                </Box>
                            </Flex>
                            <Flex pt={5}>
                                <Box width={1 / 2} px={3}>
                                    <div
                                        style={{ height: 400, background: "url('https://via.placeholder.com/150')" }}
                                    />
                                </Box>
                                <Box width={1 / 2} px={3}>
                                    <Heading.H2 textStyle="display7" mb={3}>
                                        Voyage organisé
                                    </Heading.H2>
                                    <Text.P textStyle="body2" mb={3}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit
                                        metus. Phasellus quis condimentum elit. Vivamus convallis lacus mi, a varius
                                        ligula egestas et.
                                    </Text.P>
                                </Box>
                            </Flex>
                        </Container>
                    </Box>
                </Section>
            </Content>
            <Footer />
        </Layout>
    );
}

export default withTheme(App);
