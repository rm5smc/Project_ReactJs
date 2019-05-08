import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
        <section className="container-Lh">
            <div className="Lh">
                <div className="Lh__item">
                    <p><i className="fa fa-plane"></i></p>
                    <p>Miễn phí vận chuyển</p>
                </div>
                <div className="Lh__item">
                    <p><i className="fa fa-gift"></i></p>
                    <p>Nhận ngay quà tặng trị giá 350.000đ</p>
                </div>
                <div className="Lh__item__right">
                    <p><i className="fa fa-star"></i></p>
                    <p>Giảm 30% cho đơn hàng trên 5.000.000đ</p>
                </div>
            </div>
        </section>
    );
  }
}

export default Contacts;