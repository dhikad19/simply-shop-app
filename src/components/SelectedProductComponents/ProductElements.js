import styled from 'styled-components'
import { FcLike, FcSearch, FcShipped, FcRating } from 'react-icons/fc'

export const TitleH1 = styled.h1`
    color: #000;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    display: flex;
`

export const Info = styled.div `
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.37);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover ${TitleH1}{
        opacity: 0;
        transition: all 0.5s ease;
      }
`

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s ease;
    border: 2px solid rgba(97, 97, 97, 0.575);;
    border-radius: 5px;

    &:hover ${Info}{
        opacity: 1;
        transition: all 0.5s ease;
      }
`

export const Image = styled.img `
    height: 75%;
`

export const Icon = styled.div `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.418);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: #fff;
        transform: scale(1.1);
    }
`

export const Like = styled(FcLike)`
    font-size: 30px;
`

export const Search = styled(FcSearch)`
    font-size: 30px;
`

export const Shipper = styled(FcShipped)`
    font-size: 30px;
`

export const Rating = styled(FcRating)`
    font-size: 20px;
    display: flex;
`