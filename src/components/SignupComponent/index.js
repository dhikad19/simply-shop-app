import React from 'react'
import { Container, 
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormButton,
    FormLabel,
    Text,
    TextSpan} from './SignupElements'


const Signup = () => {
    return (
        <>
            <Container>
            <FormWrap>
                <Icon to='/'><span>Simply</span>.ltd</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign Up <br/> <span>Get 30% discount for every product</span></FormH1>
                        <FormLabel htmlFor='for'>Username</FormLabel>
                        <FormInput type='username' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required placeholder='example@mail.com' />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign Up</FormButton>
                        <Text>Already have an account? <TextSpan to='signin'>Sign In</TextSpan></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default Signup
