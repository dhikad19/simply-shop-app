import React from 'react'
import { ButtonWrapper, Container, Image, Info, Title, Button, Description } from './CategoriesItemsElement'

const CategoriesItems = ({item}) => {
    return (
        <Container id='item'>
            <Image src={item.img}/>
            <Info>
                <Title><span>Simply_ </span>{item.title}</Title>
                <Description>{item.desc}</Description>
                <ButtonWrapper>
                    <Button to={item.to}>Shop Now</Button>
                </ButtonWrapper>
            </Info>      
        </Container>
    )
}

export default CategoriesItems
