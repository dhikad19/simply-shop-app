import React from 'react'
import { Container, Title, FilterContainer, Filter, FilterText, Select, Option } from './ProductListElements'
import Navbar from '../NavbarComponent'
import Products from '../SelectedComponents'
import Footer from '../FooterComponent'

const ProductListComponents = () => {
    return (
        <Container>
            <Navbar />
            <Title>Selected Products</Title>
            <FilterContainer>
                <Filter><FilterText>Filter:</FilterText>
                <Select name="color">
                    <Option disabled>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Orange</Option>
                    <Option>Blue</Option> 
                    <Option>Green</Option>
                    <Option>Grey</Option>
                </Select>
                <Select name="size">
                    <Option disabled>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option> 
                    <Option>XXl</Option>
                    <Option>3XL</Option>
                </Select>
                </Filter>
                <Filter><FilterText>Sort: </FilterText>
                <Select>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price</Option>
                    <Option value="desc">Rating</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Footer />
        </Container>
    )
}

export default ProductListComponents
