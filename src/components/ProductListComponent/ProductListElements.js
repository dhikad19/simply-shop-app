import styled from "styled-components";

export const Container = styled.div`
    
`

export const Title = styled.h1`
    margin: 40px;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    margin-top: -5px;
    margin-bottom: -15px;
`

export const Filter = styled.div`
    margin: 20px;
    border: none;

    @media screen and (max-width: 768px) {
        width: 0px 20px;
        display: flex;
        flex-direction: column;
    }
`

export const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
    }
`

export const Select = styled.select`
    padding: 5px;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 10px;
    border: 1px solid grey;
    
    @media screen and (max-width: 768px) {
        margin: 5px 0px;
    }

`

export const Option = styled.option`
    padding: 10px;
    border: 1px solid grey;
`