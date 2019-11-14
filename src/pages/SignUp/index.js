import React from 'react';
import {Link} from 'react-router-dom';

import {Form, Input} from '@rocketseat/unform';

import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  nome: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string().min(6, 'Password has a minimum of 6 characters').required('Password is required'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
        <Link to="/">Sign in</Link>
      </Form>
    </>
  );
}
