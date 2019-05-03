import React from 'react';
import styled from 'styled-components';

import Header from './../components/Header';
import Button from './../components/Button';
import Heading from './../components/Heading';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    background: url('/static/images/home-background.png') no-repeat center center fixed;
    background-size: cover;
`;

const Hero = styled.div`
    text-align: center;
    max-width: 460px;
    margin-left: 200px;
`;

export default function App() {
    return (
        <Layout>
            <div>
                <Header />
            </div>
            <Content>
                <Hero>
                    <Heading.H2 textStyle="display6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Heading.H2>
                    <Button variant="primary-fill" mt={4}>
                        RÉSERVEZ MAINTENANT
                    </Button>
                </Hero>
            </Content>
        </Layout>
    );
}
