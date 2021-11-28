import React from 'react'
import { Container } from './SelectedElements'
import Product from '../SelectedProductComponents'
import { popularProducts } from '../../data'

const Products = () => {

    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    );
};

export default Products
