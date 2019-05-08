import React, { Component } from 'react';
import Menu_Products from './Menu_Products';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About_Us from '../home/About_Us';
import Home from '../home/Home';
import { Redirect } from 'react-router-dom';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
    localStorage.removeItem('data');
    this.setState({
      redirect: true
    })
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/login"></Redirect>
      )
    }
    if (localStorage.getItem('data') !== null) {
      return (
        <div>
          <ul className="header__prim">
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/about_us">GIỚI THIỆU</Link>
            </li>
            <Menu_Products />
            <li>
              <Link to="/news">TIN TỨC</Link>
            </li>
            <li>
              <Link to="/map">BẢN ĐỒ</Link>
            </li>
            <li>
              <button onClick={this.onLogout}>Logout</button>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <ul className="header__prim">
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/about_us">GIỚI THIỆU</Link>
            </li>
            <Menu_Products />
            <li>
              <Link to="/news">TIN TỨC</Link>
            </li>
            <li>
              <Link to="/map">BẢN ĐỒ</Link>
            </li>
            <li>
              <Link to="/login">Đăng Nhập</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      )
    }



  }
}

export default Menu;