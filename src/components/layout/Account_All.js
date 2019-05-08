import React, { Component } from 'react';
import Account_All_Info from './Account_All_Info';
import Acconut_All_Table from './Acconut_All_Table';
import Account_All_Button from './Account_All_Button';
import Account_All_Process from './Account_All_Process';

class Account_All extends Component {
  render() {
    return (
      <div className="container-account">
        <h2>TÀI KHOẢN</h2>
        <Account_All_Process />
        <div className="account__all">
          <div className="account__table">
            <Acconut_All_Table />
            <div id="dv_bought">
            </div>
            {/* <label >Tổng tiền:</label>
      <label id="lb__bought"></label> */}
            <Account_All_Button />
          </div>
          <div className="account-del">
            <p className="account-del__tit">Chi tiết tài khoản</p>
            <Account_All_Info />
          </div>
        </div>
      </div>
    );
  }
}

export default Account_All;