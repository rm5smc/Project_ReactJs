import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import Map_All from '../layout/Map_All';
import Footer from '../layout/Footer';

class Map extends Component {
  render() {
    return (
      <div>
         <Header />
         <Link_All />
         <Map_All />
         <Footer />
      </div>
    );
  }
}

export default Map;