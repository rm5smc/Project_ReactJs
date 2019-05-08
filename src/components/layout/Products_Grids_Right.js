import React, { Component } from 'react';
import Products_Grids_Icons from './Products_Grids_Icons';
import Products_Grids_Products from './Products_Grids_Products';

class Products_Grids_Right extends Component {
  render() {
    return (
        <div className="grid__right">
            <div className="list-content__head">
                <Products_Grids_Icons />
                <div className="list-content__head--select__num">
                    <i className="fa fa-caret-left" /><span>1</span><span>2</span><span>3</span><i className="fa fa-caret-right" />
                </div>
            </div>
            <Products_Grids_Products />
            <div className="list-content__head2">
                <Products_Grids_Icons />
                <div className="list-content__head2--select__num"><i className="fa fa-caret-left" /><span>1</span><span>2</span><span>3</span><i className="fa fa-caret-right" />
                </div>
            </div>
        </div>
    );
  }
}

export default Products_Grids_Right;