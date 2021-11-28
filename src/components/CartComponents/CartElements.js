import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`

`

export const Wrapper = styled.div`
    padding: 20px;

    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

export const TopTexts = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const TopText = styled.span`
    cursor: pointer;
    display: flex;
    text-decoration: underline;
    margin: 0px 10px;
    text-align: center;
    justify-content: center;
`

export const TopButton = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    padding: 10px;
    font-weight: 500;
    margin: 35px;
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    transition: 0.5s ease;

    &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
        transition: 0.5s ease;
    }
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

export const Info = styled.div`
    flex: 3;
`

export const Summary = styled.div`
    flex: 1;
    border: 1px solid grey;
    border-radius: 5px;
    height: 50vh;
    padding: 20px;
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-left: 40px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-left: 0px;
    }
`

export const Image = styled.img`
    width: 200px;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ProductName = styled.span`

`

export const ProductId = styled.span`

`

export const ProductSize = styled.span`

`

export const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`

export const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

export const Button = styled.div`
    border: 1px solid #000;
    background: #fff;
    color: #000;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.5s ease;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    display: flex;

    &: hover {
        background: #000;
        color: #fff;
        transition: 0.5s ease;
    }
`

export const SummaryTitle = styled.h1`
    font-weight: 200;
`

export const SummaryItemText = styled.span`

`

export const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between; 
`

export const SummaryItemPrice = styled.span`

`