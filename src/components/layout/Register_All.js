import React, { Component } from 'react';
import Register_All_Info_People from './Register_All_Info_People';
import Register_All_Info_Login from './Register_All_Info_Login';

class Register_All extends Component {
  render() {
    return (
      <div className="container-register">
        <div className="register__all">
          <h1 className="register__title">ĐĂNG KÝ</h1>
          <div className="form__all">
            <Register_All_Info_People />
            <Register_All_Info_Login/>
          </div>
        </div>
      </div>
    );
  }
}

export default Register_All;