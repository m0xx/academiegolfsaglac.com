import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Juniors from './Juniors';
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'

import theme from './theme';

function Root() {
    return <React.Fragment>
        <Normalize />
        <ThemeProvider theme={theme}>
            <Juniors />
        </ThemeProvider>
    </React.Fragment>
}

ReactDOM.render(<Root />, document.getElementById("app"));