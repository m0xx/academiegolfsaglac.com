import React from 'react';
import styled from 'styled-components';

import Header from './../components/Header';
import HeaderImage from '../components/HeaderImage';
import Box from '../components/Box';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Flex from '../components/Flex';
import Container from '../components/Container';
import PriceCard from '../components/PriceCard';

export default function GolfInterieur() {
    return (
        <div>
            <Header />
            <HeaderImage />
            <Box py={5}>
                <Container py={5}>
                    <Box px={3}>
                        <Heading.H2 textStyle="display7" mb={3}>
                            Golf Intérieur
                        </Heading.H2>
                        <Text.P textStyle="body2" mb={3}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus.
                            Phasellus quis condimentum elit. Vivamus convallis lacus mi, a varius ligula egestas et.
                        </Text.P>
                    </Box>
                    <Flex>
                        <Box width={1 / 2} px={3}>
                            <PriceCard
                                title="Frappe de balles"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus."
                                price="299$"
                            />
                        </Box>
                        <Box width={1 / 2} px={3}>
                            <PriceCard
                                title="Cours de groupes"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec velit metus."
                                price="299$"
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </div>
    );
}
