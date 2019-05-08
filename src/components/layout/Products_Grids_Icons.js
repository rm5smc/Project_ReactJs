import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Products_Grids_Icons extends Component {
  render() {
    return (
      <div className="list-content__head--select">
        <Link to="/product_grid"><i className="fas fa-th-large" /></Link>
        <Link to="/product_col"><i className="fa fa-list-ul" /></Link>
    </div>
    );
  }
}

export default Products_Grids_Icons;