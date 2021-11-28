import styled from "styled-components";
import { IoIosAdd, IoIosRemove } from 'react-icons/io'

export const Container = styled.div`
    
`

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    @media screen and (max-width: 768px) {
        padding: 10px;
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

export const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: 40vh;
        margin-bottom: 10px;
    }
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`

export const Title = styled.h1`
    font-weight: 200;
`

export const Description = styled.p`
    margin: 20px 0px;
`

export const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
`

export const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const FilterSize = styled.select`
    margin-left: 10px;
`

export const FilterSizeOption = styled.option`
    border-radius: 5px;
`

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    color: #000;
`

export const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

export const Amount = styled.option`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

export const Button = styled.button`
    border: 0.5px solid black;
    color: #000;
    background: #fff;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 10px;
    transition: 0.5s ease;

    &:hover {
        color: #fff;
        background: #000;
        transition: 0.5s ease;
    }
`

export const Add = styled(IoIosAdd)`
    cursor: pointer;
`

export const Remove = styled(IoIosRemove)`
    cursor: pointer;
`