import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Badge } from '@material-ui/core';
import { init } from 'ityped';
import {
    Nav,
    NotifContainer,
    Container,
    Wrapper,
    Left,
    Right,
    Center,
    SearchContainer,
    SearchIcon,
    Input,
    Logo,
    ShopChart,
    MenuItem,
} from './NavbarElements'

const Navbar = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: [" Women and Kids T-Shirt.", " Men Sweaters and Jeans.", " Kids Shoes and Jackets."]
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
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center><Logo to='/' onClick={toggleHome}>Simply<span>.ltd</span></Logo></Center>
                <Right>
                    <MenuItem  to="cartpage">
                    <Badge badgeContent={2} color="primary">
                        <ShopChart to="cartpage"/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
        </Nav>
    )
}

export default Navbar
