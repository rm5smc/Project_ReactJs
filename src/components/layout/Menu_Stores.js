import React, { Component } from 'react';

class Menu_Stores extends Component {
  render() {
    return (
    <div className="cart">
        <div className="list__item">
            <div className="cart__item"><img className="cart__item__img" src="../images/cart-item.jpg" />
            <div className="cart__item__descript">
                <p className="cart__item__descript__name">Áo sơ mi nam</p>
                <p className="cart__item__descript__price">120.000<sup>đ</sup></p>
            </div><a>x</a>
            </div>
            <div className="cart__item"><img className="cart__item__img" src="../images/cart-item.jpg" />
            <div className="cart__item__descript">
                <p className="cart__item__descript__name">Áo sơ mi nam</p>
                <p className="cart__item__descript__price">120.000<sup>đ</sup></p>
            </div><a>x</a>
            </div>
        </div>
        <p className="cart__sum-price">Tổng số<span>240.000<sup>đ</sup></span></p><input className="cart__button" type="button" defaultValue="GIỎ HÀNG"  />
    </div>
    );
  }
}

export default Menu_Stores;