import React, { Component } from 'react';
import Products_Details_SP_info from './Products_Details_SP_info';
import Products_Details_SP_Form from './Products_Details_SP_Form';
import Products_Details_SP_Lh from './Products_Details_SP_Lh';

class Products_Details_SP_Right extends Component {
  render() {
    return (
        <div className="detail-descript">
                <Products_Details_SP_info />
                <Products_Details_SP_Form />
                <Products_Details_SP_Lh />
            </div>
    );
  }
}

export default Products_Details_SP_Right;