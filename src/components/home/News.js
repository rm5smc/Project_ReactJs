import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import News_All from '../layout/News_All';
import Footer from '../layout/Footer';

class News extends Component {
  render() {
    return (
      <div>
          <Header />
          <Link_All />
          <News_All />
          <Footer />
      </div>
    );
  }
}

export default News;