import React from 'react'
import { Container, Title, Description, InputContainer, Input, Button } from './NewsletterElements'

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Join our newsletter to get update and discount about our product.</Description>
                <InputContainer>
                    <Input placeholder='example@email.com'/>
                    <Button>
                        Subscribe
                    </Button>
                </InputContainer>
        </Container>
    )
}

export default Newsletter
