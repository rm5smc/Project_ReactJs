import React, { Component } from 'react';
import Login_All_Head from './Login_All_Head';
import Login_All_Form from './Login_All_Form';

class Login_All extends Component {
  render() {
    return (
      <div className="container-login">
        <div className="login">
          <Login_All_Head />
          <Login_All_Form />
        </div>
      </div>
    );
  }
}

export default Login_All;