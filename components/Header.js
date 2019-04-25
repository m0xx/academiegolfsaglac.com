import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { SocialIcon } from 'react-social-icons';

const Container = styled.div`
    padding-right: 30px;
    display: flex;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    text-align: right;
    padding-bottom: ${props => props.theme.space[2]}px;
`;

const Logo = styled.div`
    width: 120px;
    height: 120px;
    background-color: #000;
`;

const MenuItem = styled.li`
    display: inline-block;
    padding: 0;
    font-size: ${props => props.theme.fontSizes[3]}px;
    margin-left: ${props => props.theme.space[4]}px;
`;

const Menu = styled.ul`
    display: inline-block;
    margin: 0;
    padding: 0;
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: ${props => props.theme.space[3]}px;
`;

const Phone = styled.span`
    display: inline-block;
    color: #000;
    font-size: ${props => props.theme.fontSizes[2]}px;
    margin-right: ${props => props.theme.space[3]}px;
`;

const StyledLink = styled.a`
    &,
    &:visited {
        text-decoration: none;
        opacity: 0.8;
        color: ${props => (props.active ? props.theme.colors.blue : '#333')};
        transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    }

    &:hover {
        opacity: 1;
    }
`;

const links = [
    { href: '/services', label: 'Services' },
    { href: '/juniors', label: 'Juniors' },
    { href: '/golf-interieur', label: 'Golf Intérieur' },
    { href: '/a-propos', label: 'À Propos' }
];

function Header({ router }) {
    return (
        <Container>
            <Logo />
            <Content>
                <Contact>
                    <Phone>(418) 812-0532</Phone>
                    <SocialIcon style={{ width: 32, height: 32 }} url="https://www.facebook.com/academiegolfsaglac/" />
                </Contact>
                <Menu>
                    {links.map(({ href, label }) => {
                        const active = router.pathname === href;

                        return (
                            <MenuItem key={href}>
                                <Link>
                                    <StyledLink href={href} active={active}>
                                        {label}
                                    </StyledLink>
                                </Link>
                            </MenuItem>
                        );
                    })}
                </Menu>
            </Content>
        </Container>
    );
}

export default withRouter(Header);
