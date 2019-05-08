import React, { Component } from 'react';

class Blog_Details_All_Left extends Component {
  render() {
    return (
      <div className="blog-detail__left">
            <div className="blog-detail__left__item">
              <h3 className="blog-detail__left__header">Bài viết mới nhất</h3>
              <div className="blog-detail__left__body">
                <div className="blg-news"><img className="blg-new__img" src="../images/2a.jpg" />
                  <p className="blg-new__time">11<span> / Tháng 5</span></p>
                  <p className="blg-new__author">Đăng bởi Giang Lê</p>
                </div>
                <div className="blg-new1"><img className="blg-new__img" src="../images/2b.jpg" />
                  <p className="blg-new__time">11<span> / Tháng 5</span></p>
                  <p className="blg-new__author">Đăng bởi Giang Lê</p>
                </div>
                <div className="blg-new2"><img className="blg-new__img" src="../images/2c.jpg" />
                  <p className="blg-new__time">11<span> / Tháng 5</span></p>
                  <p className="blg-new__author">Đăng bởi Giang Lê</p>
                </div>
              </div>
            </div>
            <div className="blog-detail__left__item2">
              <h3 className="blog-detail__left__item2__header">BLOG TAGS</h3>
              <div className="blog-detail__left__item2__body"><button className="blog-detail__left--btn">Đồng hồ</button><button className="blog-detail__left--btnSl">Túi</button><button>Phụ kiện</button><button>Đồng
                  hồ</button><button>Túi</button><button>Giày</button><button>Sandal</button><button>Áo Sơ
                  mi</button><button>Nước hoa</button></div>
            </div>
            <div className="blog-detail__left__item3">
              <h3>TEST VIDEO</h3>
              <div className="blog-detail__left--video"><img className="blog-detail__left__banner" src="../images/3.jpg" /><i className="far fa-play-circle" /></div>
            </div>
          </div>
    );
  }
}

export default Blog_Details_All_Left;