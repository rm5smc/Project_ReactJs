import React, { Component } from 'react';

class Account_All_Info extends Component {
  render() {
    return (
      <div className="account-del__body">
              <p className="account-del__body__name"><i className="fa fa-user" /><span>GiangLe <br /></span>Leanhgiang@gmai.com</p>
              <p className="account-detail__body__address"><i className="fas fa-map-marker-alt" />Tòa nhà Hà Nội group 442 Đội Cấn,
                Ba Đình, Hà
                Nội</p>
              <p className="account-detail__body__phone"><i className="fa fa-phone" />(04)141412</p>
      </div>
    );
  }
}

export default Account_All_Info;