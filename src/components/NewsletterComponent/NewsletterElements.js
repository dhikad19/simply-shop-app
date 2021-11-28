import styled from 'styled-components'

export const Container = styled.div`
    height: 60vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 55px;
    }

    @media screen and (max-width: 480px) {
        font-size: 45px;
    }
`

export const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        text-align: center;
        max-width: 350px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
        text-align: center;
    }
`

export const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        margin-left: -30px;
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    flex: 5;
    padding-left: 30px;

    @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
        padding-left: 10px;
    }
`

export const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    transition: 0.5s ease;
    padding: 5px;

    &:hover {
        background-color: #222222;
        color: #fff;
        transition: 0.5s ease;
        padding: 0px;
    }
`