import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from './Container';
import Text from './Text';

const Root = styled.div`
    padding: ${props => props.theme.space[4]}px;
    text-align: center;
`;

function Footer() {
    return (
        <Root>
            <Container>
                <Text.Span>
                    © 2019 Tous droits réservés - Conception:{' '}
                    <Link href="http://maxm.ca">
                        <a>maxm</a>
                    </Link>
                </Text.Span>
            </Container>
        </Root>
    );
}

Footer.displayName = 'Footer';

export default Footer;
