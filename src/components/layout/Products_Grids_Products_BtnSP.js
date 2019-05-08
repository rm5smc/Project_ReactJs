import React, { Component } from 'react';
import Products_Grids_Products_Type from './Products_Grids_Products_Type';
import Products_Grids_Products_Name from './Products_Grids_Products_Name';
import Products_Grids_Products_Prices from './Products_Grids_Products_Prices';
import Products_Grids_Products_BtnBuy from './Products_Grids_Products_BtnBuy';

class Products_Grids_Products_BtnSP extends Component {
  render() {
    return (
       <div className="sp__grid__all--three">
            <img src="../images/01_Home_32.jpg" />
            <div className="sp__detail__select3">
                <Products_Grids_Products_Type />
                <Products_Grids_Products_Name />
                <p className="under3">_____</p>
                <div className="sp__detail__price">
                    <Products_Grids_Products_Prices />
                </div>
                <Products_Grids_Products_BtnBuy />
            </div>
        </div>
    );
  }
}

export default Products_Grids_Products_BtnSP;