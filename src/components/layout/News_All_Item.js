import React, { Component } from 'react';

class News_All_Item extends Component {
  render() {
    return (
      <div className="item"><img className="blog-body__img" src="../images/1.jpg" />
              <h3 className="blog-body__title">Review son kem Bourjois Velvet</h3>
              <div className="blog-body__text">
                <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày
                  đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                <p className="blog-body__text--select">Bởi Nam Trần (27/5/2016)</p>
              </div>
              <div className="blog-body__footer">
                <p>Đọc thêm</p>
                <p className="blog-body__footer--select">23 Bình luận</p>
              </div>
        </div>
    );
  }
}

export default News_All_Item;