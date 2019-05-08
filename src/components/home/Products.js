import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Products_Banner from '../layout/Products_Banner';
import Products_Grid_Menu from '../layout/Products_Grid_Menu';
import Footer from '../layout/Footer';

class Products extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link_All />
        <Products_Banner />
        <Products_Grid_Menu />
        <Footer />
      </div>
    );
  }
}
export default Products;