import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    background-color: pink;
`

const Hero = styled.div`
    max-width: 300px;
    margin-left: 200px;
`

const Button = styled.div`
    display: inline-block;
    padding: 10px;
    font-weight: bold;
    color: #FFF;
    background-color: #000;
`


export default function App() {
    return <Layout>
        <Header />
        <Content >
            <Hero>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Button>RÉSERVEZ MAINTENANT</Button>
            </Hero>
        </Content>
    </Layout>
}