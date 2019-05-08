import React, { Component } from 'react';

class Products_Col_Products_Right extends Component {
  render() {
    return (
      <div className="sp__grid__all--threeS"><img src="../images/01_Home_32.jpg" style={{float: 'left'}} />
              <div className="sp__detail__select33">
                <div className="sp__detail__name">Mỹ phẩm châu Âu thương hiệu hàng đầu thế giới</div>
                <div className="product__detail__buy"><i className="fa fa-heart" /><i className="fa fa-heart" /><i className="fa fa-heart" /><i className="fa fa-heart" /><i className="fa fa-heart" /><span>( 4 lượt mua
                    )</span></div>
                <p className="product__detail__text">Tự hào được ghi là năm mà Tiffany &amp; Co là thành lập, bộ sưu tập mang tính
                  biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu
                  dáng
                  đẹp đường cong và đường nét mượt mà.</p>
                <div className="sp__detail__price">
                  <p className="price__tit">355000$</p>
                </div>
                <div className="sp__detail__button"><button>MUA HÀNG</button><button className="icons__select"><i className="fa fa-heart" /></button><button><i className="fa fa-refresh" /></button></div>
              </div>
      </div>
    );
  }
}

export default Products_Col_Products_Right;