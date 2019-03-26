import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const Header = styled.div`
    padding-right: 30px;
    display: flex;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    // background-color: red;
    text-align: right
`


const Logo = styled.div`
    width: 120px;
    height: 120px;
    background-color: #000;
`

const MenuItem = styled.li`
    display: inline-block;
    padding:0;
    margin-left: 20px;
    font-weight: bold;
`

const Menu = styled.ul`
    display: inline-block;
    margin:0;
    padding:0;
`

const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Facebook = styled.span`
    display: inline-block;
    border-radius: 48px;
    width: 48px;
    height: 48px;
    background-color: #000;
    margin-left: 20px;
`

const Phone = styled.span`
    display: inline-block;
    color: #000;
`

export default function App() {
    return <Header>
        <Logo />
        <Content>
            <Contact>
                <Phone>(418) 812-0532</Phone>
                <Facebook />
            </Contact>
            <Menu>
                <MenuItem><Link href="/services">SERVICES</Link></MenuItem>
                <MenuItem><Link href="/juniors">JUNIORS</Link></MenuItem>
                <MenuItem><Link href="/golf-interieur">GOLF INTÉRIEUR</Link></MenuItem>
                <MenuItem><Link href="/a-propos">À PROPOS</Link></MenuItem>
            </Menu>
        </Content>
    </Header>
}