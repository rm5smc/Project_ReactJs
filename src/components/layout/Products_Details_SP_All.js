import React, { Component } from 'react';
import Products_Details_SP_Left from './Products_Details_SP_Left';
import Products_Details_All_SP_Right from './Products_Details_All_SP_Right';

class Products_Details_SP_All extends Component {
  render() {
    return (
      <div className="container-more__detail">
        <div className="more-detail">
          <Products_Details_SP_Left />
          <Products_Details_All_SP_Right />
        </div>
      </div>
    );
  }
}

export default Products_Details_SP_All;