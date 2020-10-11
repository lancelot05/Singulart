import React from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
} from '../Signin/SigninElements';

const Signup = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>Singulart</Icon>
        <FormContent>
          <Form action=''>
            <FormH1>Sign up to your account.</FormH1>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <FormInput type='text' required />
            <FormLabel htmlFor='contact'>Contact Number</FormLabel>
            <FormInput type='tel' pattern='[0-9]{10}' required />
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signup;
