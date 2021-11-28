import React from 'react'
import { Like, Search, Shipper, Container, Image, Info, Icon, TitleH1, Rating } from './ProductElements'
import { Link } from 'react-router-dom'


const Product = ({item}) => {
    return (
        <Container>
            <TitleH1>Top Selling <span> <Rating /></span></TitleH1>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Like />
                </Icon>
                <Icon>
                    <Link to='product'>
                    <Search />
                    </Link>
                </Icon>
                <Icon>
                    <Shipper />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
