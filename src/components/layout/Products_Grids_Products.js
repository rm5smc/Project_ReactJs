import React, { Component } from 'react';
import Products_Grids_Products_BtnSP from './Products_Grids_Products_BtnSP';

class Products_Grids_Products extends Component {
  render() {
    return (
         <div className="list-sp">
            <div className="sp__grid">
                <div className="sp__grid__all--one">
                    <img className="prod__img5" src="../images/01_Home_38.jpg" />
                    <div className="sp__detail__select1">
                        <div className="sp_detail__type1">TYFFTNY</div>
                        <div className="sp__detail__name">Mỹ phẩm châu Âu</div>
                        <p className="under1">_____</p>
                        <div className="sp__detail__price">
                                <p className="price__tit1">355000$</p>
                        </div>
                    </div>
                </div>{/* product: is selected*/}
                <Products_Grids_Products_BtnSP />
                <div className="sp__grid__all--four"><img className="prod__img" src="../images/01_Home_35.jpg" />
                    <div className="sp__detail__select2">
                        <div className="sp__detail__type1">DEBORA</div>
                        <div className="sp__detail__name">Mỹ phẩm châu Âu</div>
                        <p className="under2">_____</p>
                        <div className="sp__detail__price">
                        <p className="price__tit2">355000$</p>
                        </div>
                    </div>
                </div>
                <div className="sp__grid__all--five"><img className="prod__img" src="../images/01_Home_38.jpg" />
                <div className="sp__detail__select4">
                    <div className="sp__detail__type1">SARVON</div>
                    <div className="sp__detail__name">Mỹ phẩm châu Âu</div>
                    <p className="under4">_____</p>
                    <div className="sp__detail__price">
                    <p className="price__tit">355000$</p>
                    </div>
                </div>
                </div>
                <Products_Grids_Products_BtnSP />
                <div className="sp__grid__all--two"><img className="prod__img5" src="../images/01_Home_35.jpg" />
                <div className="sp__detail__select5">
                    <div className="sp__detail__type1">OHUI</div>
                    <div className="sp__detail__name">Mỹ phẩm châu Âu</div>
                    <p className="under5">_____</p>
                    <div className="sp__detail__price">
                    <p className="price__tit5">355000$</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Products_Grids_Products;