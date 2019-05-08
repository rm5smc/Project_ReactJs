import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <section className="team">
        <div className="container_gt">
          <div className="gt__all"><img className="gt__avatar" src="../images/img-tron.png" />
            <div className="gt__descript">
              <p className="gt__descript__txt"><span>“</span> Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
                chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất,
                hãng Rohto<span> ”</span></p>
              <p className="gt__descript__pos">TutiLe _<span>_ Giám đốc phát triển sản phẩm</span></p><i className="fas fa-square" /><i className="far fa-square" /><i className="far fa-square" />
            </div><img className="team__img__intro" src="../images/flowers.png" />
          </div>
        </div>
      </section>
    );
  }
}

export default Team;