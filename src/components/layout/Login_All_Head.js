import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login_All_Head extends Component {
  render() {
    return (
      <div className="login__head">
            <h1 className="form__title">Đăng Nhập</h1>
            <button><Link to="/register">Đăng Ký</Link></button>
          </div>
    );
  }
}

export default Login_All_Head;