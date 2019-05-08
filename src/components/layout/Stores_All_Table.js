import React, { Component } from 'react';

class Stores_All_Table extends Component {
  render() {
    return (
      <table className="table">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng số</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody id="tbl__pro">
              <tr>
                <td><img src="../images/Layer 75.jpg" /></td>
                <td> Lắc tay D&amp;G</td>
                <td>345.000<sup>đ</sup></td>
                <td>1</td>
                <td>345.000<sup>đ</sup></td>
                <td><i className="fa fa-trash" /></td>
              </tr>
              <tr>
                <td><img src="../images/Layer 75.jpg" /></td>
                <td> Lắc tay D&amp;G</td>
                <td>345.000<sup>đ</sup></td>
                <td>1</td>
                <td>345.000<sup>đ</sup></td>
                <td><i className="fa fa-trash" /></td>
              </tr>
            </tbody>
          </table>
    );
  }
}

export default Stores_All_Table;