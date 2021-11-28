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
        Text1,
        TextSpan} from './SigninElements'

const Signin = () => {
    return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'><span>Simply</span>.ltd</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign In With Your Account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='username' required placeholder='example@mail.com' />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton >Sign In</FormButton>
                        <Text1>Forgot your password? <TextSpan>Reset</TextSpan></Text1>
                        <Text>Dont have an account? <TextSpan to='signup'>Sign Up Now</TextSpan></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
    </>
    )
}

export default Signin
