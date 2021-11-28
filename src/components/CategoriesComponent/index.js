import React from 'react'
import { categories } from '../../data'
import CategoriesItems from '../CategoriesItemsComponents'
import { Container } from './CategoriesElement'

const Categories = ({item}) => {
    
    return (
        <Container>
            {categories.map(item => (
                <CategoriesItems item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
