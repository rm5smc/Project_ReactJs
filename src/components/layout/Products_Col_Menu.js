import React, { Component } from 'react';
import Products_Grid_Left from './Products_Grid_Left';
import Products_Col_Menu_Right from './Products_Col_Menu_Right';

class Products_Col_Menu extends Component {
  render() {
    return (
      <div className="container-grids">
            <div className="grid__all">
                <Products_Grid_Left />
                <Products_Col_Menu_Right />
            </div>
      </div>
    );
  }
}

export default Products_Col_Menu;