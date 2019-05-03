import React from 'react';
import styled from 'styled-components';

import Header from './../components/Header';
import Button from './../components/Button';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    background-color: pink;
`;

const Hero = styled.div`
    max-width: 300px;
    margin-left: 200px;
`;

// const Button = styled.div`
//     display: inline-block;
//     padding: 10px;
//     font-weight: bold;
//     color: #FFF;
//     background-color: #000;
// `

export default function App() {
    return (
        <Layout>
            <div>
                <Header />
            </div>
            <Content>
                <Hero>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <Button variant="secondary">RÉSERVEZ MAINTENANT</Button>
                </Hero>
            </Content>
        </Layout>
    );
}
