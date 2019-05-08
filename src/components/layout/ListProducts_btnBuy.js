import React, { Component } from 'react';
import ListProduct_btnBuy_Type from './ListProduct_btnBuy_Type';
import ListProducts_btnBuy_Name from './ListProducts_btnBuy_Name';
import ListProducts_btnBuy_Prices from './ListProducts_btnBuy_Prices';
import ListProducts_btnBuy_Button from './ListProducts_btnBuy_Button';

class ListProducts_btnBuy extends Component {
  render() {
    return (
        <div className="prod__grid__all--three"><img src="../images/01_Home_32.jpg" />
            <div className="prod__detail__select3">
                <ListProduct_btnBuy_Type />
                <ListProducts_btnBuy_Name />
                <p className="under3">_____</p>{/* <img src="../images/Shape 16 2.png">*/}
                <div className="prod__detail__price">
                    <ListProducts_btnBuy_Prices />
                </div>
                <ListProducts_btnBuy_Button />
            </div>
        </div>
    );
  }
}

export default ListProducts_btnBuy;