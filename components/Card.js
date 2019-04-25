import React from 'react';
import Paper from './../components/Paper';

const Card = ({ children }) => {
    return (
        <Paper elevation={3} p={4} style={{ textAlign: 'center', display: 'inline-block' }}>
            {children}
        </Paper>
    );
};

export default Card;
