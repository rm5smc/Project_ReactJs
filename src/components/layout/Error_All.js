import React, { Component } from 'react';

class Error_All extends Component {
  render() {
    return (
      <div>
        <div className="error"><img className="error__img" src="../images/404.jpg" />
      <p className="error__tit">Đây không phải là trang web bạn đang tìm kiếm</p>
      <div className="error__search"><input type="search--select" /><i className="fa fa-search" /></div>
      <div className="error__footer"><input className="form__foot__button" id="btn__modal" type="button" defaultValue="Liên hệ" /><input className="form__foot__button" type="button" defaultValue="Trang chủ" onclick="location.href='index.html'" /></div>
    </div>
      </div>
    );
  }
}

export default Error_All;