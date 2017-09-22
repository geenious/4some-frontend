import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div className='container'>
        <Link to='/' className='page-logo'>4some.golf</Link>
        <div className='login-box'>
          <h2>Login</h2>
          <input placeholder='Username' />
          <input placeholder='Password' />
        </div>
      </div>
    )
  }
}
