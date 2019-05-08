import React, { Component } from 'react';
import Products_Details_SP_Left_Menu from './Products_Details_SP_Left_Menu';
import Products_Details_SP_Left_Prod from './Products_Details_SP_Left_Prod';

class Products_Details_SP_Left extends Component {
  render() {
    return (
      <div className="descript-prod">
            <Products_Details_SP_Left_Menu />
            <Products_Details_SP_Left_Prod />
          </div>
    );
  }
}

export default Products_Details_SP_Left;