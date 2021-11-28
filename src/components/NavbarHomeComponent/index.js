import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { init } from 'ityped';
import {
    Nav,
    NotifContainer,
    Container,
    Wrapper,
    Left,
    Right,
    Center,
    Language,
    Logo,
    MenuItem1,
    Select
} from './NavbarHomeElemets'

const NavbarHome = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: [" Women and Kids T-Shirt", " Men Sweaters and Jeans", " Kids Shoes and Jackets"]
        })
    },[])

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 120) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <Nav scrollNav={scrollNav}>
        <NotifContainer>
        <p>Special Deal! Discount For<span ref={textRef}></span></p>
        </NotifContainer>
        <Container>
            <Wrapper>
                <Left>
                    <Select>
                    <Language disabled selected>EN</Language>
                    <Language>ID</Language>
                    </Select>
                </Left>
                <Center><Logo to='/' onClick={toggleHome}>Simply<span>.ltd</span></Logo></Center>
                <Right>
                    <MenuItem1 to='signin'>Sign In</MenuItem1>
                    <MenuItem1 to='signup'>Sign Up</MenuItem1>
                </Right>
            </Wrapper>
        </Container>
        </Nav>
    )
}

export default NavbarHome
