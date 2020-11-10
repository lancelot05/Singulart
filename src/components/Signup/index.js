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
  Text
} from '../Signin/SigninElements';

import {projectAuth, projectFirestore} from '../../firebase/config'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [redirect, setRedirect] = useState(null)
  const [error, setError] = useState(null)
  
  const afterSubmit = () => {
    alert('Account Successfully Created.')
    setRedirect('/')
  }


  const formSubmit = (e, email, password) => {
    e.preventDefault();
    return projectAuth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      return projectFirestore.collection('users').doc(cred.user.email).set({
        id: cred.user.uid,
        email: email,
        contact: contact,
        username: username
      })
    }).then(() => {
      setEmail('');
      setPassword('');
      setUsername('');
      setContact('');
      setError(null);
      afterSubmit()
    }).catch(err => {
      setError(err.message);
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'contact') {
      setContact(value);
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
            <FormH1>Sign up to your account.</FormH1>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <FormInput name='username' value={username} type='text' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='contact'>Contact Number</FormLabel>
            <FormInput name='contact' value={contact} type='tel' pattern='[0-9]{10}' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput name='email' value={email} type='email' onChange={(e) => onChangeHandler(e)} required />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput name='password' value={password} type='password' onChange={(e) => onChangeHandler(e)} required />
            <FormButton type='submit'>Continue</FormButton>
            {error && <Text> {error} </Text>}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signup;
