import React, { Component } from 'react';
import Products_Grids_Item_Left from './Products_Grids_Item_Left';

class Products_Grid_Left extends Component {
  render() {
    return (
        <div className="grid__left">
            <Products_Grids_Item_Left />
            <div className="grid__left__item">
            <h3 className="grid__left__item__header select-tit">So sánh sản phẩm</h3>
            <div className="grid__left__item__body">
                <p className="grid__left--select">Bạn chưa có sản phẩm nào để so sánh</p>
            </div>
            </div>
            <div className="grid__left__item">
                <h3 className="grid__left__item__header">Tag sản phẩm</h3>
                <div className="grid__left__item__body">
                    <div className="about__them3"><button className="btn1">Đồng hồ</button><button className="btn2">Túi</button><button className="btn3">Phụ kiện</button><button className="btn4">Đồng hồ</button><button className="btn5">Túi</button><button className="btn6">Giày</button><button className="btn7">Sandal</button><button className="btn8">Áo sơ mi</button><button className="btn9">Nước hoa</button></div>
                </div>
            </div><img className="grid__left__banner" src="../images/04_Gird_03.jpg" />
        </div>
    );
  }
}

export default Products_Grid_Left;