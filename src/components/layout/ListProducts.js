import React, { Component } from 'react';
import ListProducts_Title from './ListProducts_Title';
import ListProducts_btnBuy from './ListProducts_btnBuy';


class ListProducts extends Component {
  render() {
    return (
        <section className="list-prod">
            <ListProducts_Title />
            <div className="list-prod__img"><img src="../images/01_Home_44.jpg"  /></div>
            <div className="list-prod__type">
            <p className="list-prod__type--tit">Mỹ phẩm</p>
            <p className="list-prod__type--tit">Chăm sóc da</p>
            <p className="list-prod__type--tit">Dành cho tóc</p>
            <p className="list-prod__type--tit">Nước hoa</p>
            <p className="list-prod__type--tit">Trang sức</p>
            <p className="list-prod__type--tit">Quà tặng</p>
            </div>
            <div className="prod__grid">
            <div className="prod__grid__all--one"><img className="prod__img5" src="../images/Product copy 10.png" />
                <div className="prod__detail__select1">
                <div className="prod_detail__type1">TYFFTNY</div>
                <div className="prod__detail__name">Mỹ phẩm châu Âu</div>
                <p className="under1">_____</p>{/* <img src="../images/Shape 16 2.png">*/}
                <div className="prod__detail__price">
                    <p className="price__tit1">355000$</p>
                </div>
                </div>
            </div><img className="arrow_left" src="../images/arrow_left.jpg" />
            <div className="prod__grid__all--four"><img className="prod__img" src="../images/01_Home_35.jpg" />
                <div className="prod__detail__select2">
                <div className="prod__detail__type">DEBORA</div>
                <div className="prod__detail__name">Mỹ phẩm châu Âu</div>
                <p className="under2">_____</p>{/* <img src="../images/Shape 16 2.png">*/}
                <div className="prod__detail__price">
                    <p className="price__tit2">355000$</p>
                </div>
                </div>
            </div>{/* product: is selected*/}
            <ListProducts_btnBuy />
            <div className="prod__grid__all--five"><img className="prod__img" src="../images/01_Home_38.jpg" />
                <div className="prod__detail__select4">
                <div className="prod__detail__type5">SARVON</div>
                <div className="prod__detail__name">Mỹ phẩm châu Âu</div>
                <p className="under4">_____</p>{/* <img src="../images/Shape 16 2.png">*/}
                <div className="prod__detail__price">
                    <p className="price__tit">355000$</p>
                </div>
                </div>
            </div><img className="arrow_right" src="../images/arrow-right.png" />
            <div className="prod__grid__all--two"><img className="prod__img5" src="../images/Product copy 4.png" />
                <div className="prod__detail__select5">
                <div className="prod__detail__type5">OHUI</div>
                <div className="prod__detail__name">Mỹ phẩm châu Âu</div>
                <p className="under5">_____</p>{/* <img src="../images/Shape 16 2.png">*/}
                <div className="prod__detail__price">
                    <p className="price__tit5">355000$</p>
                </div>
                </div>
            </div>
            </div>
      </section>
    );
  }
}

export default ListProducts;