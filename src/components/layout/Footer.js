import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-footer">
          <div className="footer__all">
            <div className="footer__item1">
              <h2 className="footer__item__header">Liên Hệ với chúng tôi</h2>
              <p><i className="fas fa-map-marker-alt" />Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn,<br />P. Cống Vị, Q. Ba Đình,
                Hà
                Nội</p>
              <p><i className="fas fa-phone-volume" />(04) 6674 2332<i className="fas fa-phone-volume select--ic" />(04) 3786 8904
              </p>
              <p className="cl-green"><i className="fas fa-phone-volume" /><span className="cl_grey">(08) 6680 9686</span><i className="fas fa-mail-bulk select--ic" />Support@bizweb.vn</p>
            </div>
            <div className="footer__item2">
              <div className="footer__item2--clom1">
                <h2 className="footer__item__header">Chuyển hàng</h2>
                <p>Mua sắm trực tuyến</p>
                <p className="cl-green">Đến từ chúng tôi gửi đến</p>
                <p>Chính sách vận chuyển</p>
                <p>Vận chuyển thông tin</p>
              </div>
              <div className="footer__item2--clom2">
                <h2 className="footer__item__header">Hỗ trợ</h2>
                <p>Câu chuyện của chúng ta</p>
                <p>Thanh toán an toàn</p>
                <p>Tùy chọn Vận Chuyển</p>
                <p>Chính sách vận chuyển</p>
              </div>
              <div className="footer__item2--clom3">
                <h2 className="footer__item__header">Thông tin</h2>
                <p>Về chúng tôi</p>
                <p>Điều khoản &amp; điều kiện</p>
                <p>Chính sách riêng tư</p>
                <p>Đơn đặt hàng và Returns</p>
              </div>
              <div className="footer__item2--clom4">
                <h2 className="footer__item__header">My account</h2>
                <p>Xem Giỏ hàng</p>
                <p>Sản phẩm yêu thích</p>
                <p>Kiểm tra</p>
                <p>Theo dõi đặt hàng của tôi</p>
              </div>
            </div>
          </div>
          <div className="footer__above">
            <div className="footer__above--left">
              <p>© Copyright 2008-2014 DKT Technology JSC</p>
            </div>
            <div className="footer__above--right"><img src="../images/01_Home_01_47.jpg" /><img src="../images/01_Home_01_49.jpg" /><img src="../images/01_Home_01_51.jpg" /><img src="../images/01_Home_01_53.jpg" /></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;