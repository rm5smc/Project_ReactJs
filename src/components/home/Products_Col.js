import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Products_Banner from '../layout/Products_Banner';
import Products_Col_Menu from '../layout/Products_Col_Menu';
import Footer from '../layout/Footer';

class Products_Col extends Component {
  render() {
    return (
      <div>
          <Header />
          <Link_All />
          <Products_Banner />
          <Products_Col_Menu />
          <Footer />
      </div>
    );
  }
}

export default Products_Col;