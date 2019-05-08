import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import About_Us from './components/home/About_Us';
import Products from './components/home/Products';
import Products_Col from './components/home/Products_Col';
import Products_Details from './components/home/Products_Details';
import News from './components/home/News';
import Blogs_Details from './components/home/Blogs_Details';
import Map from './components/home/Map';
import Login from './components/home/Login';
import Register from './components/home/Register';
import Stores from './components/home/Stores';
import Account from './components/home/Account';
import Error from './components/home/Error';
import Profile from './components/home/Profile';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about_us" exact component={About_Us}></Route>
            <Route path="/news" exact component={News}></Route>
            <Route path="/map" exact component={Map}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail" exact component={Products_Details}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Route path="/search" exact component={Error}></Route>
            <Route path="/product_grid" exact component={Products}></Route>
            <Route path="/product_col" exact component={Products_Col}></Route>
            <Route path="/product_store" exact component={Stores}></Route>
            <Route path="/store_info" exact component={Account}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/blog" exact component={Blogs_Details}></Route>
            <Route path="/profile" exact component={Profile}></Route>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
