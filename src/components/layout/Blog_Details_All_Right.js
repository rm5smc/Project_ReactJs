import React, { Component } from 'react';

class Blog_Details_All_Right extends Component {
  render() {
    return (
      <div className="blog-content"><img className="blog-content__img" src="../images/1.jpg" />
            <div className="blog-content__text">
              <h3 className="blog-content__text__title">nàng béo không ngại diện váy nổi bật</h3>
              <div className="blog-content__text__body">
                <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày
                  đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Trong tiết xuân hè, nàng ngoại cỡ thắp
                  sáng phong cách bằng quần họa tiết nhiệt đới đi kèm áo sơ mi nhã nhặn.Trang phục họa tiết điện tử được nàng
                  phối cùng chân váy kẻ caro, làm nên style vừa hiện đại, vừa phảng phất nét cổ điển.Lối diện đồ hàng ngày đơn
                  giản, khỏe khoắn của cô khi kết hợp chất liệu jean.Nữ blogger rực rỡ khi hòa trộn các gam đỏ, hồng, tím...
                  một cách vui tươi, kèm theo các phụ kiện điệu đà.</p>
                <p className="p__selected">Bởi Nam Trần (27/5/2015)</p>
              </div>
              <div className="blog-content__text__footer"><a src>Đọc thêm</a><a className="a__selected" src>23 Bình luận</a>
              </div>
            </div>
            <div className="blg-cont__tag"><span className="sp__selected">Tag:</span> Men</div>
            <div className="blg-cont__form">
              <form className="form">
                <h3 className="form__title">Đóng góp ý kiến</h3>
                <div className="form-elem"><label>Tên<span>*</span></label><input className="ip__selected1" /></div>
                <div className="form-elem"><label>Email<span>*</span></label><input className="ip__selected2" /></div>
                <div className="form-elem"><label className="lb__selected">Ý kiến<span>*</span></label><textarea className="ip__selected3" defaultValue={""} /></div>
                <div className="form-elem__button"><button>GỬI Ý KIẾN</button></div>
              </form>
            </div>
          </div>
    );
  }
}

export default Blog_Details_All_Right;