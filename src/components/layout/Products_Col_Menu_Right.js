import React, { Component } from 'react';
import Products_Grids_Icons from './Products_Grids_Icons';
import Products_Col_Products_Right from './Products_Col_Products_Right';

class Products_Col_Menu_Right extends Component {
  render() {
    return (
      <div className="grid__right">
        <div className="list-content__head">
          <Products_Grids_Icons />
          <div className="list-content__head--select__num"><i className="fa fa-caret-left" /><span>1</span><span>2</span><span>3</span><i className="fa fa-caret-right" />
          </div>
        </div>
        <div className="list-spS">
          <div className="sp__gridS" id="sp__gridSSS">
            <Products_Col_Products_Right />
            <Products_Col_Products_Right />
            <Products_Col_Products_Right />
          </div>
        </div>
        <div className="list-content__head2">
          <Products_Grids_Icons />
          <div className="list-content__head2--select__num"><i className="fa fa-caret-left" /><span>1</span><span>2</span><span>3</span><i className="fa fa-caret-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Products_Col_Menu_Right;