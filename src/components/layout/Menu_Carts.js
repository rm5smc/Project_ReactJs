import React, { Component } from 'react';
import Menu_Stores from './Menu_Stores';
import {Link} from 'react-router-dom';

class Menu_Carts extends Component {
  render() {
    return (
        <div className="header__right"><button><Link to="/product_store"><i className="fa fa-shopping-cart" /></Link>
            <Menu_Stores />
            </button><button><Link to="/search"><i className="fa fa-search" /></Link></button><button><a /></button>
        </div>
    );
  }
}

export default Menu_Carts;