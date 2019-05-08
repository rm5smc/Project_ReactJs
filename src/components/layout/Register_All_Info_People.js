import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register_All_Info_People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      age: '',
      work: '',
      address: '',
      phone: '',
      redirect: false
    }
    this.onChanger = this.onChanger.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }
  onChanger(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onRegister(event) {
    event.preventDefault();
    var self = this;
    axios({
      method: "POST",
      url: `http://localhost:3000/users`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        "user": this.state.user,
        "pass": this.state.pass,
        "age": this.state.age,
        "address": this.state.address,
        "phone": this.state.phone,
        "work": this.state.work,

      }
    }).then(function (response) {
      if (response.data) {
        localStorage.setItem("data", response.data.user)
        self.setState({
          redirect: true
        })
      }
    }).then(function (error) {
    });

  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/"></Redirect>
      )
    }
    return (
      <form className="form" onSubmit={this.onRegister}>
        <h3 className="form__title">THÔNG TIN ĐĂNG NHẬP</h3>
        <div className="form-tit"><label>Username<span className="upper-text">*</span></label><input type="text" name="user" onChange={this.onChanger} /></div>
        <div className="form-tit"><label>Password<span className="upper-text">*</span></label><input type="Password" name="pass" onChange={this.onChanger} /></div>
        <div className="form-tit"><label>Age<span className="upper-text">*</span></label><input type="text" name="age" onChange={this.onChanger} /></div>
        <div className="form-tit"><label>Address<span className="upper-text">*</span></label><input type="text" name="address" onChange={this.onChanger} /></div>
        <div className="form-tit"><label>Phone<span className="upper-text">*</span></label><input type="text" name="phone" onChange={this.onChanger} /></div>
        <div className="form-tit"><label>Work<span className="upper-text">*</span></label><input type="text" name="work" onChange={this.onChanger} /></div>
        <div className="form-tit form-tit__btn"><button>Gửi</button><button className="btn__select"><i className="fa fa-undo" />Quay
                  lại</button></div>
      </form>
    );
  }
}

export default Register_All_Info_People;