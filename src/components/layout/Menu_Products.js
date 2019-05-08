import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Menu_Products extends Component {
  render() {
    return (
      
        <li className="header__prim__prod"><Link to="/products">SẢN PHẨM</Link>
              <div className="menu-prod">
                <div className="menu-prod__item">
                  <h6 className="menu-prod__item__title">DƯỠNG DA</h6>
                  <div className="menu-prod__item__list">
                    <p>Áo khoác</p>
                    <p>Bộ áo liền quần</p>
                    <p>Dress</p>
                    <p>Quần/Váy</p>
                    <p>Quần sort</p>
                    <p>Quần jean</p>
                    <p>Đồ đan</p>
                    <p>Áo nỉ</p>
                    <p className="menu-prod__item__list--active">Áo sơ mi</p>
                  </div>
                </div>
                <div className="menu-prod__item">
                  <h6 className="menu-prod__item__title">NƯỚC HOA</h6>
                  <div className="menu-prod__item__list">
                    <p>Áo khoác</p>
                    <p>Bộ áo liền quần</p>
                    <p>Dress</p>
                    <p>Quần/Váy</p>
                    <p>Quần sort</p>
                    <p>Quần jean</p>
                    <p>Đồ đan</p>
                    <p>Áo nỉ</p>
                    <p className="menu-prod__item__list--active">Áo sơ mi</p>
                  </div>
                </div>
                <div className="menu-prod__item">
                  <h6 className="menu-prod__item__title">
                  <Link to="/detail">TRANG SỨC</Link>
                  
                  </h6>
                  <div className="menu-prod__item__list">
                    <p>Áo khoác</p>
                    <p>Bộ áo liền quần</p>
                    <p>Dress</p>
                    <p>Quần/Váy</p>
                    <p>Quần sort</p>
                    <p>Quần jean</p>
                    <p>Đồ đan</p>
                    <p>Áo nỉ</p>
                    <p className="menu-prod__item__list--active">Áo sơ mi</p>
                  </div>
                </div>
              </div>
            </li>
    );
  }
}

export default Menu_Products;