import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './../components/theme';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Head>
                    <title>Académie de golf Saguenay-Lac-St-Jean</title>
                </Head>
                <Normalize />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        );
    }
}

export default MyApp;
