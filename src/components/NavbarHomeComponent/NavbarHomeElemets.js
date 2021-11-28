import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NotifContainer = styled.div`
    height: 30px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    top: 0;
    border: none;
`

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#fff;' : 'rgba(255, 255, 255, 0.178)')};
    height: 85px;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: -85px;
    position: sticky;
    top: 0;
    z-index: 10;
    border: none;
    transition: 0.5s ease-out;
`

export const Container = styled.div`
    height: 60px;
`

export const Select = styled.select`
    font-size: 14px;
    cursor: pointer;
    color: #000;
    border: 1px solid grey;
    background-color: transparent;

    @media screen and (max-width: 768px) {
        display: none;
    };
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`

export const MenuItem1 = styled(Link)`
    font-size: 16px;
    cursor: pointer;
    display: flex;
    margin-left: 25px;
    color: #000;
    transition: 0.5s ease-out;
    padding: 5px;
    text-decoration: none;
    

    &:hover {
        background-color: #000;
        padding: 5px;
        color: #fff;
        border-radius: 2px;
        transition: 0.5s ease-out;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 0;
        margin-left: 15px;
    };
`

export const Left  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    };
`

export const Center  = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;

    @media screen and (max-width: 768px) {
        flex: 1;
    };
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
        color: #fff;
        transition: 0.5s ease-out;
    }

    &:hover{ 
        color: #fff;
        transition: 0.5s ease-out;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    };
`

export const Right  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    Justify-content: flex-end;
`

export const Language = styled.option`
    font-size: 14px;
    cursor: pointer;
    color: #000;
    border: none;
    background-color: transparent;

    @media screen and (max-width: 768px) {
        display: none;
    };
`