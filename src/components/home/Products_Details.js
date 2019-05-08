import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Products_Details_SP from '../layout/Products_Details_SP';
import Products_Details_SP_All from '../layout/Products_Details_SP_All';
import Footer from '../layout/Footer';

class Products_Details extends Component {
  render() {
    return (
        <div>
            <Header />
            <Link_All />
            <Products_Details_SP />
            <Products_Details_SP_All />
            <Footer />
        </div>
    );
  }
}

export default Products_Details;