import React, { Component } from 'react';

class Account_All_Process extends Component {
  render() {
    return (
      <div className="progress" style={{marginBottom: '30px'}}>
          <div className="progress-bar bg-success" style={{width: '40%'}}>
            Đăng nhập
          </div>
          <div className="progress-bar bg-warning" style={{width: '10%'}}>
            Sản phẩm
          </div>
          <div className="progress-bar bg-danger" style={{width: '20%'}}>
            Đặt mua &amp; Thanh toán
          </div>
          <div className="progress-bar bg-grey" style={{width: '20%'}}>
            Hoàn tất
          </div>
        </div>
    );
  }
}

export default Account_All_Process;