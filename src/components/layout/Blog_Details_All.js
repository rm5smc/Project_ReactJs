import React, { Component } from 'react';
import Blog_Details_All_Left from './Blog_Details_All_Left';
import Blog_Details_All_Right from './Blog_Details_All_Right';

class Blog_Details_All extends Component {
  render() {
    return (
      <div className="container__blog-detail">
        <h2>BLOG</h2>
        <div className="blog-detail__all">
          <Blog_Details_All_Left />
          <Blog_Details_All_Right />
        </div>
      </div>
    );
  }
}

export default Blog_Details_All;