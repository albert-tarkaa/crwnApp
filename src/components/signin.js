import React, { Component } from 'react';
import CustomButtom from './customButton';
import FormInput from './formInput';
import { signInWithGoogle } from '../firebase/firebase.util';
import './signin.styles.scss';

export default class Signin extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButtom type='submit'>Sign in </CustomButtom>
            <CustomButtom type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}
