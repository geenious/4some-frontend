import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../4somelogo.svg';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <nav className='home-nav'>

          <Link to='/login'>Login</Link>

          <Link to='/register'>Register</Link>

        </nav>
        <div className='home-logo'>
          <img src={logo} alt='4some logo' />
        </div>
        <section className='home-about'>
          <div>
            <i className="fa fa-map-o" aria-hidden="true"></i>
            <h2>Search Area Courses</h2>
            <p>Find a local course and book a tee time!</p>
          </div>
          <div>
            <i className="fa fa-handshake-o" aria-hidden="true"></i>
            <h2>Connect with Golfers</h2>
            <p>Connect with other local area golfers!</p>
          </div>
          <div>
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
            <h2>Fill Your Tee Time</h2>
            <p>Don't have enough players?</p><p>Let 4some.golf help fill your tee time!</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
