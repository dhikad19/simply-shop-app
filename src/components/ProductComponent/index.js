import React, { useState } from 'react'
import Navbar from '../NavbarComponent'
import Footer from '../FooterComponent'
import { Add, Remove, Container, Wrapper, ImageContainer, Price, Image, InfoContainer, Title, Description, Filter, FilterColor, FilterContainer, FilterSizeOption, FilterTitle, FilterSize, AddContainer, Amount, AmountContainer, Button } from './ProductElements'

const Products = () => {
    const [quantity, setQuantity] = useState(1);
    
    const handleQuantity = (type) => {
        if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
        } else {
        setQuantity(quantity + 1);
        }
    };
    
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                <Image src="https://m.media-amazon.com/images/I/51MjdWG7PKL.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Ripped Jeans Jacket</Title>
                    <Description>Ripped Jeans Jacket, made by selected jeans. 100% cotton and comfort to use all day long, order now!.</Description>
                    <Price>Rp. 1100000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color: </FilterTitle>
                            <FilterColor color="blue" />
                        </Filter>
                        <Filter>
                        <FilterTitle>Size: </FilterTitle>
                        <FilterSize>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>3XL</FilterSizeOption>
                        </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Products
