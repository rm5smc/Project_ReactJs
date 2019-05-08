import React, { Component } from 'react';
import { requestLogin } from '../../actions/user';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Login_All_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      redirect: false
    }
    this.onChanger = this.onChanger.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onChanger(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onLogin(event) {
    event.preventDefault();
    var self = this;
    axios({
      method: "GET",
      url: `http://localhost:3000/users?user=${this.state.user}&pass=${this.state.pass}`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      if (response.data[0]) {
        localStorage.setItem("data", response.data[0].user)
        self.setState({
          redirect: true
        })
      }
    })
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/"></Redirect>
      )
    }
    return (
      <form className="form" onSubmit={this.onLogin}>
        <div className="form__all">
          <h3 className="form__title">Khách hàng đăng ký</h3>
          <p>Nếu bạn có 1 tài khoản,vui lòng đăng nhập</p>
          <div className="form-tit"><label>Địa chỉ email<span className="icos-txt">*</span></label><input type="text" name="user" onChange={this.onChanger} /></div>
          <div className="form-tit"><label>Password<span className="icos-txt">*</span></label><input type="Password" name="pass" onChange={this.onChanger} /></div>
          <div className="form-tit form-tit__btn"><a>Quên mật khẩu ?</a><button>Đăng nhập</button></div>
        </div>
      </form>
    );
  }
}

export default Login_All_Form;