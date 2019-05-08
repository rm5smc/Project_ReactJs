import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Blog_Details_All from '../layout/Blog_Details_All';
import Footer from '../layout/Footer';

class Blogs_Details extends Component {
  render() {
    return (
      <div>
          <Header />
          <Link_All />
          <Blog_Details_All />
          <Footer />
      </div>
    );
  }
}

export default Blogs_Details;