import React, { Component } from 'react'
import '../assets/common.css';
export default class Login extends Component {
    render() {
        return (
        
            <div className="container">
            <div className="login-panel">
          
            <label for="psw"><b>Email Id:</b></label>
            <input type="text" placeholder="Enter Name" name="psw" required/><br/>
            <label for="psw-repeat"><b>Password:</b></label>
            <input type="text" placeholder="Enter Address" name="psw-repeat" required/><br/>


    <button type="submit" class="registerbtn">Login</button>
   
    </div>
            </div>
                
          
        )
    }
}
