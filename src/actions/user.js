import axios from 'axios';
export function requestLogin(data) {
  return axios({
    method: "GET",
    url: `http://localhost:3000/users?user=${data.user}&pass=${data.pass}`,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    localStorage.setItem('data', JSON.stringify(response.data));
  }).then(function (error) {
  });
}