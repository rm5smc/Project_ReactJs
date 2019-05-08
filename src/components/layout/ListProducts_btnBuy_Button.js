import React, { Component } from 'react';

class ListProducts_btnBuy_Button extends Component {
  render() {
    return (
      <div className="prod__detail__button"><button>MUA HÀNG</button><button className="icons__select"><i className="fa fa-heart" /></button><button><i className="fa fa-refresh" /></button></div>
    );
  }
}

export default ListProducts_btnBuy_Button;