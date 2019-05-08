import React, { Component } from 'react';
import Products_Details_SP_Right from './Products_Details_SP_Right';

class Products_Details_SP extends Component {
  render() {
    return (
        <div className="container__detail-product">
            <div className="detail-img">
            <div className="detail-img__list"><img className="detail__arrow" src="../images/03_Detail_03.jpg" /><img src="../images/Layer 80.jpg" /><img src="../images/Layer 82.jpg" /><img src="../images/Layer 83.jpg" /><img src="../images/Layer 84.jpg" /><img className="detail__arrowed" src="../images/03_Detail_07.jpg" /></div>
            <img className="detail-img__product" src="../images/Layer 79.jpg" />
            </div>
            <Products_Details_SP_Right />
      </div>
    );
  }
}

export default Products_Details_SP;