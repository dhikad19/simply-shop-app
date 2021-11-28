import React from 'react'
import { ButtonWrapper, Container, SliderBg, SliderVid, InfoContainer, Title, Button } from './HeroElements'
import Video1 from '../../videos/video.mp4'
import './Button.css'

const Hero = () => {
    return (
        <Container>
            <SliderBg>
                <SliderVid autoPlay loop muted src={Video1} type='video/mp4' />
            </SliderBg>
            <InfoContainer>
                    <Title><span>Simply</span> Style, <br /> Style <span>Simply</span> </Title>
                    <ButtonWrapper>
                    <Button 
                    className="from-center" 
                    to='catalogue'
                    >Catalogue</Button>
                    </ButtonWrapper>
                </InfoContainer>
        </Container>
    )
}

export default Hero
