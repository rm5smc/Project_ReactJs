import React, { Component } from 'react';
import Menu from './Menu';
import Menu_Carts from './Menu_Carts';
import Logo from './Logo';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
            <div className="content_header">
                <div className="container header">
                    <Logo />
                    <Menu />
                    <Menu_Carts />
                </div>
            </div>
     
            
        );
    }
}
        
export default Header;