import React from 'react';
import styled from 'styled-components';

import Header from './../components/Header';
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
export default function APropos() {
    return (
        <Layout>
            <Header />
            <h1>À Propos...</h1>
        </Layout>
    );
}
