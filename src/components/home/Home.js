import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './../layout/Header';
import Footer from './../layout/Footer';
import Background from '../layout/Background';
import Contacts from '../layout/Contacts';
import Combo_One from '../layout/Combo_One';
import Combo_Two from '../layout/Combo_Two';
import Team from '../layout/Team';
import ListProducts from '../layout/ListProducts';
import Social_Icons from '../layout/Social_Icons';
import About_Ushome from '../layout/About_Ushome';



class Home extends Component {
  render() {
    return (
      <div>
          <Header />
          <Background />
          <Contacts />
          <Combo_One />
          <Combo_Two />
          <Team />
          <ListProducts />
          <Social_Icons />
          <About_Ushome />
          <Footer />
      </div>
    );
  }
}

export default Home;