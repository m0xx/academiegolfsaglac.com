import React from 'react';
import styled from 'styled-components';
import Heading from './../components/Heading';
import Text from './../components/Text';
import Card from './Card';

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

export default PriceCard;
