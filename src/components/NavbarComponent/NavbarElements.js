import styled from 'styled-components'
import { RiSearch2Line } from 'react-icons/ri'
import { BsHandbag } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const NotifContainer = styled.div`
    height: 30px;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    top: 0;
    border: none;
`

export const Nav = styled.nav`
    background: #fff;
    height: 85px;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
    border: none;
    transition: 0.5s ease-out;
`

export const Container = styled.div`
    height: 60px;
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`

export const ShopChart = styled(BsHandbag)`
    font-size: 25px;

    @media screen and (max-width: 786px){
        font-size: 22px;
    }
`

export const MenuItem = styled(Link)`
    font-size: 16px;
    cursor: pointer;
    display: flex;
    margin-left: 25px;
    color: #000;
    transition: 0.5s ease-out;
    margin-right: 30px;
    padding: 5px;
    background-color: #fff;
    transition: 0.5s ease;
    border-radius: 50%;

    &:hover {
        color: #fff;
        border-radius: 50%;
        transition: 0.5s ease-out;
        background-color: #000;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 786px){
        margin-left: 0;
        margin-right: 0;
    }
`

export const SearchIcon = styled(RiSearch2Line)`
    color: #000;
    cursor: pointer;
    transition: 0.5s ease-out;

    &:hover {
        color: #fff;
        transition: 0.5s ease-out;
    }
`

export const Left  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const Center  = styled.div`
    justify-content: center;
    align-items: center;
`

export const Logo = styled.h1`
    font-weight: semi-bold;
    cursor: pointer;
    color: #000;
    font-size: 25px;
    transition: 0.5s ease-out;
    justify-content: center;
    align-items: center;

    span{
        color: #000;
        transition: 0.5s ease-out;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 480px) {
        align-items: center;
        justify-content: center;
    }
`

export const Right  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    Justify-content: flex-end;
`

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    color: #000;
`

export const SearchContainer = styled.div`
    border: 1px solid #000;
    border-radius: 15px;
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding: 5px;

    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

