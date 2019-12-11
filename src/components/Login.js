import React, { Component } from 'react'
import '../assets/common.css';
import Service from '../services/Service';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state=({
         userName:"",
         password:"",

        })
        this.serviceObj = new Service();
    }
    
    handleSubmit=()=>{
        this.serviceObj.login(this.state).then(
            response => {

            });
    }
    render() {
        return (
        
            <div className="container">
            <div className="login-panel">
          
            <label for="psw"><b>Username:</b></label>
            <input type="text" onChange={(e)=>{this.setState({userName:e.currentTarget.value})}}  placeholder="Enter Username" name="psw" required/><br/>
            <label for="psw-repeat"><b>Password:</b></label>
            <input type="text" onChange={(e)=>{this.setState({password:e.currentTarget.value})}} placeholder="Enter Password" name="psw-repeat" required/><br/>


    <button type="submit" onClick={this.handleSubmit} class="registerbtn">Login</button>
   
    </div>
            </div>
                
          
        )
    }
}
