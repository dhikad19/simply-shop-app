import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 100vh;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: 70vh;
    }

    @media screen and (max-width: 480px) {
        height: 50vh;
    }
`

export const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
`

export const Description = styled.p`
    color: #fff;
    text-align: left;
    max-width: 300px;
    margin-bottom: 20px;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        font-size: 15px;
        max-width: 250px;
    }
`

export const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    font-size: 35px;
    text-align: left;
    max-width: 300px;

    span {
        background-color: #fff;
        padding: 2px;
        color: #000;
        border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 25px;
        text-align: center;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    position: relative;
    max-width: 300px;
`

export const Button = styled(Link)`
    border-radius: 2px;
    font-weight: semi-bold;
    background: rgba(0, 0, 0, 0.575);
    white-space: nowrap;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: inherit;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(255, 255, 255, 0.76);
        color: #000;
    };

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`

