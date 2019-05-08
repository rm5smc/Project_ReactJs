import React, { Component } from 'react';
import Products_Details_All_SP_Right_Prod from './Products_Details_All_SP_Right_Prod';

class Products_Details_All_SP_Right extends Component {
  render() {
    return (
      <div className="sibar-detail">
            <div className="prod-gd">
              <h3 className="prod-gd__header2">Sản phẩm bán chạy</h3>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                <Products_Details_All_SP_Right_Prod />
              </div>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                <Products_Details_All_SP_Right_Prod />
              </div>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                 <Products_Details_All_SP_Right_Prod />
              </div>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                <Products_Details_All_SP_Right_Prod />
              </div>
            </div>
            <div className="prod-gd">
              <h3 className="prod-gd__header2">Sản phẩm Mua Nhiều</h3>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                <Products_Details_All_SP_Right_Prod />
              </div>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                <Products_Details_All_SP_Right_Prod />
              </div>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                <Products_Details_All_SP_Right_Prod />
              </div>
              <div className="prod-gd__item"><img className="prod-gd__item__img" src="../images/Layer 31 copy.jpg" />
                 <Products_Details_All_SP_Right_Prod />
              </div>
             
            </div>
          </div>
    );
  }
}

export default Products_Details_All_SP_Right;