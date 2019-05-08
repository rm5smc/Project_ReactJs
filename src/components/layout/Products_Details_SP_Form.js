import React, { Component } from 'react';

class Products_Details_SP_Form extends Component {
  render() {
    return (
      <form className="detail-descript__form">
                    <div><label>MÀU SẮC</label><select>
                        <option> Màu bạc</option>
                    </select></div>
                    <div className="detail-descript__form--select"><label>Size</label><select>
                        <option>12</option>
                    </select></div>
                    <div className="prod__detail__btn"><button>MUA HÀNG</button><button className="icons__select"><i className="fa fa-heart" /></button><button><i className="fa fa-refresh" /></button></div>
                </form>
    );
  }
}

export default Products_Details_SP_Form;