import * as config from "../config/config.js";
// import ChangePassword from "../components/ChangePassword";

export default class Service {
  addNewRecord = encrypted_data => {
    return fetch(`${config.baseUrl}/saveUser`, {
      method: "POST",
      body: encrypted_data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(res => {
        return res;
      }).catch(error => {
        window.location.href = "/invalidUrl";
      });
  };


  login = encrypted_data => {
    return fetch(`${config.baseUrl}/login`, {
      method: "POST",
      body: encrypted_data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(res => {
        return res;
      }).catch(error => {
        window.location.href = "/invalidUrl";
      });
  };
}