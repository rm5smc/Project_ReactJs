import React, { Component } from 'react';
import ListProducts_NewTitle from './ListProducts_NewTitle';
import ListProducts_BuyBest from './ListProducts_BuyBest';
import ListProducts_Specials from './ListProducts_Specials';

class ListProducts_Title extends Component {
  render() {
    return (
        <div className="list-prod__all">
            <ListProducts_NewTitle />
            <ListProducts_BuyBest />
            <ListProducts_Specials />
        </div>
    );
  }
}

export default ListProducts_Title;