import React, { Component } from 'react';

class About_Us_About extends Component {
  render() {
    return (
      <div className="container__about-us">
        <h2 className="about-us__tit">VỀ CHÚNG TÔI</h2>
        <div className="about-us__all"><img className="about-us__left" src="../images/about-us.png" />
          <div className="about-us__right">
            <div className="about-us__right--all">
              <p className="header-logo"><span>M</span>andala</p>
              <h3 className="about-us__tit">GIỚI THIỆU CHUNG VỀ MÝ PHẨM HANDMADE MANLADA</h3>
              <p className="about-us__tit--select">Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
                chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                hãng Rohto.Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức
                hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hãng Rohto.</p>
              <p className="about-us__right__more">Xem thêm</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About_Us_About;