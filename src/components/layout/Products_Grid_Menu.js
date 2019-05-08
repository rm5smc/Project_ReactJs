import React, { Component } from 'react';
import Products_Grid_Left from './Products_Grid_Left';
import Products_Grids_Right from './Products_Grids_Right';

class Products_Grid_Menu extends Component {
  render() {
    return (
      <div className="container-grids">
            <div className="grid__all">
                <Products_Grid_Left />
                <Products_Grids_Right />
            </div>
      </div>
    );
  }
}

export default Products_Grid_Menu;