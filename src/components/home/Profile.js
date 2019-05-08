import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Link_All from '../layout/Link_All';
import axios from 'axios'; // là thư viện để thực hiện ajax


class Profile extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {},
      phone: '',
      work: '',
      address: '',
      user: '',
      pass: '',
      age: ''
    }
  }
  componentDidMount() {
    const user = localStorage.getItem("data");
    var self = this;
    axios({
      method: "GET",
      url: `http://localhost:3000/users?user=${user}`,
    }).then(function (response) {
      if (response.data[0]) {
        self.setState({
          data: response.data[0]
        })
      }
    })
  }
  onChanger = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onUpdate = () => {
    var self = this;
    axios({
      method: "GET",
      url: `http://localhost:3000/users/${this.state.data.id}`,
    }).then(function (response) {
      self.setState({
        phone: response.data.phone,
        work: response.data.work,
        address: response.data.address,
        user: response.data.user,
        pass: response.data.pass,
        age: response.data.age
      })

    })
  }
  onEdit = (event) => {
    event.preventDefault();
    var self = this;
    axios({
      method: "PUT",
      url: `http://localhost:3000/users/${this.state.data.id}`,
      data: {
        "phone": this.state.phone,
        "work": this.state.work,
        "address": this.state.address,
        "user": this.state.user,
        "pass": this.state.pass,
        "age": this.state.age,
      }
    }).then(function (response) {
      window.location.reload();
    })  
  }
  render() {
    return (
      <div>
        <Header />
        <Link_All />
        <table className="table">
          <thead>
            <tr>
              <th>Họ</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Nơi Sinh</th>
              <th>Số ĐT</th>
              <th>Làm Việc/ Công Tác</th>
              <th>Sửa</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>{this.state.data.user}</td>
              <td>{this.state.data.user}</td>
              <td>{this.state.data.age}</td>
              <td>{this.state.data.address}</td>
              <td>{this.state.data.phone}</td>
              <td>{this.state.data.work}</td>
              <td><button><i className="far fa-edit" onClick={this.onUpdate} /></button></td>
            </tr>
          </tbody>
        </table>


        <form onSubmit={this.onEdit}>
          <legend>Form Update</legend>
          <div className="form-group">
            <input type="text" className="form-control" name="phone" placeholder="Số ĐT" value={this.state.phone} onChange={this.onChanger} />
            <input type="text" className="form-control" name="work" placeholder="Làm Việc/Công tác" value={this.state.work} onChange={this.onChanger} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>

      </div>
    );
  }
}

export default Profile;