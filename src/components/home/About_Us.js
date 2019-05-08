import React, { Component } from 'react';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import About_Us_About from '../layout/About_Us_About';
import Footer from '../layout/Footer';

class About_Us extends Component {
  render() {
    return (
        <div>
            <Header />
            <Link_All />
            <About_Us_About />
            <Footer />
        </div>
        
    );
  }
}

export default About_Us;