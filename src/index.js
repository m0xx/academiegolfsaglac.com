import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Juniors from './Juniors';
import { Normalize } from 'styled-normalize'

function Root() {
    return <React.Fragment>
        <Normalize />
        <Juniors />
    </React.Fragment>
}

ReactDOM.render(<Root />, document.getElementById("app"));