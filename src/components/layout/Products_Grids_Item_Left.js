import React, { Component } from 'react';

class Products_Grids_Item_Left extends Component {
  render() {
    return (
      <div className="grid__left__item">
                <h3 className="grid__left__item__header"><i className="fa fa-bars" />Danh mục sản phẩm</h3>
                    <div className="grid__left__item__body">
                        <div className="list">
                            <ul>
                                <li>Mỹ phẩm</li>
                            </ul><i className="fas fa-caret-right select" />
                        </div>
                        <div className="list">
                            <ul>
                                <li>Trang sức</li>
                            </ul><i className="fas fa-caret-right selecteed" />
                        </div>
                        <div className="list">
                            <ul>
                                <li>Phụ kiện</li>
                            </ul><i className="fas fa-caret-right select" />
                        </div>
                        <div className="list">
                            <ul>
                                <li>Nước hoa</li>
                            </ul><i className="fas fa-caret-right selecteed" />
                    </div>
                </div>
            </div>
    );
  }
}

export default Products_Grids_Item_Left;