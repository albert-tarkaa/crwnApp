import React from 'react';
import Signin from '../components/signin';
import Signup from '../components/signup';
import './signinup.styles.scss';

export default function SignInUp() {
  return (
    <div className='sign-in-and-sign-up'>
      <Signin />
      <Signup />
    </div>
  );
}
