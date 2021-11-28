import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SliderContent = styled.div`
    z-index: 3;
    max-width: 900px;

    @media screen and (max-width: 1080px) {
        margin-right: 0;
        align-items: center;
    };

    @media screen and (max-width: 480px) {
        margin-right: 0;
        align-items: center;
    };
`

export const InfoContainer = styled.div`
    z-index: 3;
    max-width: 1600px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media screen and (max-width: 1080px) {
        margin-right: 0;
        align-items: center;
    };

    @media screen and (max-width: 480px) {
        margin-right: 0;
        align-items: center;
    };
`

export const Title = styled.h1`
    color: #fff;
    font-weight: bolder;
    font-size: 100px;
    text-align: center;
    letter-spacing: 4px;

    span {
        color: #000;
    }

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max width: 480px){
        font-size: 40px;
    }
`

export const Slide = styled.div`
    display: flex;
`

export const ButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1080px) {
        align-items: center;
    };
`

export const Button = styled(Link)`
    position: relative;	
    padding: 1.4rem 3.5rem;
    font-size: 1.4rem;
    color: #fff;
    letter-spacing: 10px;
    text-transform: uppercase;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
    cursor: pointer;
    user-select: none;
    font-weight: bold;

    :before, :after {
        content: '';
        position: absolute;	
        transition: inherit;
        z-index: -1;
    }

    &:hover {
        color: rgba(0, 0, 0, 0.575);
        transition-delay: .5s;
    }

    &:hover:before {
        transition-delay: 0s;
    }

    &:hover:after {
        background: rgba(255, 255, 255, 0.363);
        transition-delay: .35s;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        font-size: 1rem;
    };
`

export const Container = styled.div`
    background: #252323;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%,
        rgba(0, 0, 0, 0.13) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const Arrow = styled.div`
    background-color: transparent;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    left: ${props=> props.direction === "left" && "30px"}; 
    right: ${props=> props.direction === "right" && "30px"};
; `

export const SliderBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const SliderVid = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #13141c;
`

export const ArrowLeft = styled(IoIosArrowDropleft)`
    color: rgba(255, 255, 255, 0.397);
    font-size: 45px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`

export const ArrowRight = styled(IoIosArrowDropright)`
    color: rgba(255, 255, 255, 0.397);
    font-size: 45px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`