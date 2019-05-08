import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Stores_All from '../layout/Stores_All';
import Footer from '../layout/Footer';

class Stores extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link_All />
        <Stores_All />
        <Footer />
      </div>
    );
  }
}

export default Stores;