import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import {FooterContainer, 
        FooterLinks, 
        FooterWrap, 
        FooterLinksItems, 
        FooterLinksWrapper, 
        FooterLinksContainer, 
        FooterLinksTitle, 
        SocialIconsLink, 
        SocialIcons,
        SocialLogo,
        SocialMedia,
        SocialMediaWrap, 
        WebsiteRight,
        FooterStyle
        } from './FooterElements'


const Footer = () => {
    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLinks to="/">How it Works</FooterLinks>
                                <FooterLinks to="/">Testimonials</FooterLinks>
                                <FooterLinks to="/">Careers with Us</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Link to Us</FooterLinksTitle>
                                <FooterLinks to="/">Sponsor Link</FooterLinks>
                                <FooterLinks to="/">Brand Name</FooterLinks>
                                <FooterLinks to="/">Contract Us</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Link Manager</FooterLinksTitle>
                                <FooterLinks to="/">Producers Name</FooterLinks>
                                <FooterLinks to="/">Studio Location</FooterLinks>
                                <FooterLinks to="/">Invites Artist</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Price List</FooterLinksTitle>
                                <FooterLinks to="/">Product List</FooterLinks>
                                <FooterLinks to="/">Brand List</FooterLinks>
                                <FooterLinks to="/">Technichaly</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            <span>Simply</span>.ltd
                        </SocialLogo>
                        <WebsiteRight><FooterStyle>dika911</FooterStyle> © {new Date().getFullYear()} All rights reserved.</WebsiteRight>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
