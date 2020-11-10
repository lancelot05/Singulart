import React from 'react';
import { useState } from 'react';
import { projectAuth } from '../../firebase/config';
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
  Text
} from './SigninElements';
import { Redirect } from 'react-router-dom';

const Signin = () => {
  const [redirect, setRedirect] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  const afterSubmit = () => {
    alert('You have logged in successfully.')
    setRedirect('/')
  }

  const formSubmit = (e, email, password) => {
    e.preventDefault();
    return projectAuth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred);
      setEmail('');
      setPassword('');
      setError(null);
      afterSubmit()
    }).catch(err => {
      setError(err.message);
    })
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  if (redirect) {
    return(
    <Redirect to = {redirect} />
    )
  }

  return (
    <Container>
      <FormWrap>
        <Icon to='/'>Singulart</Icon>
        <FormContent>
          <Form onSubmit={(e) => formSubmit(e,email,password)}>
            <FormH1>Sign in to your account.</FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput name='email' value={email} type='email' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput name='password' value={password} type='password' onChange={(e) => onChangeHandler(e)} required />
            <FormButton type='submit'>Continue</FormButton>
            {error && <Text>{error}</Text>}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
