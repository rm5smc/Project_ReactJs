import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Account_All from '../layout/Account_All';
import Footer from '../layout/Footer';

class Account extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link_All />
        <Account_All />
        <Footer />
      </div>
    );
  }
}

export default Account;