import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Login_All from '../layout/Login_All';
import Footer from '../layout/Footer';

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link_All />
        <Login_All />
        <Footer />
      </div>
    );
  }
}

export default Login;