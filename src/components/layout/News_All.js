import React, { Component } from 'react';
import Products_Grids_Icons from './Products_Grids_Icons';
import News_All_Item from './News_All_Item';
import {Link} from 'react-router-dom';
class News_All extends Component {
  render() {
    return (
      <div className="container-blog">
        <h2><Link to="/blog">BLOG</Link></h2>
        <div className="list-content__head">
          <Products_Grids_Icons />
          <div className="list-content__head--select__num"><i className="fa fa-caret-left" /><span>1</span><span>2</span><span>3</span><i className="fa fa-caret-right" /></div>
        </div>
        <div className="blog__body">
          <div className="blog__all">
            <News_All_Item />
            <News_All_Item />
            <News_All_Item />
            <News_All_Item />
            <News_All_Item />
            <News_All_Item />
            <News_All_Item />
            <News_All_Item />
            <News_All_Item />
          </div>
        </div>
        <div className="list-content__head">
          <Products_Grids_Icons />
          <div className="list-content__head--select__num"><i className="fa fa-caret-left" /><span>1</span><span>2</span><span>3</span><i className="fa fa-caret-right" /></div>
        </div>
      </div>
    );
  }
}

export default News_All;