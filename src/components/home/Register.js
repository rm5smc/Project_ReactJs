import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Register_All from '../layout/Register_All';
import Footer from '../layout/Footer';

class Register extends Component {
  render() {
    return (
      <div>
          <Header />
          <Link_All />
          <Register_All />
          <Footer />
      </div>
    );
  }
}

export default Register;