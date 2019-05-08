import React, { Component } from 'react';
import Stores_All_Table from './Stores_All_Table';
import Stores_All_Button from './Stores_All_Button';
import {Link} from 'react-router-dom';

class Stores_All extends Component {
  render() {
    return (
      <div className="container-sp">
        <h2>GIỎ HÀNG</h2>
        <Link to="/store_info">Thông tin</Link>
        <div className="sp-cart">
          <Stores_All_Table />
          <Stores_All_Button />
        </div>
      </div>
    );
  }
}

export default Stores_All;