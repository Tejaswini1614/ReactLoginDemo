import React, { Component } from 'react'
import '../assets/common.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import Service from '../services/Service';
import { Button, Input, Label } from "reactstrap";
export default class Registration extends React.Component {
    constructor(){
        super();
        this.state={
            name:"",
            emailId:"",
            address:"",

        }

        this.serviceObj = new Service();
    }


    handleSubmit=()=>{
debugger;
        this.serviceObj.addNewRecord(this.state).then(
            response => {

            });

    };
    render() {
         
        return (
            <div>
            <div className="container">
            <div className="register-panel">
       <div style={{fontSize:"30px"}}>
       <b>Registration Form</b>
       </div>
            <div className="form-group row">
            <div className="col-sm-12">
              <div className="col-sm-11 offset-sm-1 " style={{paddingRight:"57%"}}>
              <label for="psw">Name:</label>
              </div>
              <div className="col-sm-11 offset-sm-1">
            
            <input type="text" onChange={(e)=>{this.setState({name:e.currentTarget.value})}} placeholder="Enter Name" name="psw" required/><br/>
            </div>
            </div>
            </div>
            <div className="form-group row">
            <div className="col-sm-6">
              <div className="col-sm-11 offset-sm-1 " style={{paddingRight:"57%"}}>
            <label for="psw-repeat">Address:</label>
            </div>
            <div className="col-sm-11 offset-sm-1">
            <Input type="text" onChange={(e)=>{this.setState({address:e.currentTarget.value})}} placeholder="Enter Address" name="psw-repeat" required/><br/>
            </div>
            </div>
            </div>

            <div className="form-group row">
            <div className="col-sm-6">
              <div className="col-sm-11 offset-sm-1 " style={{paddingRight:"57%"}}>
    <label for="email">Email:</label>
    </div>
    <div className="col-sm-11 offset-sm-1">
    <input type="text" onChange={(e)=>{this.setState({emailId:e.currentTarget.value})}} placeholder="Enter Email" name="email" required/><br/>

    </div>
    </div>
    </div>
    <p>By creating an account you agree to our <a >Terms & Privacy</a>.</p>
    <button type="submit"  onClick={this.handleSubmit} class="registerbtn">Register</button>
   
                
           
            <div>
            <p>Already have an account?
             <Link to={"/login"}>
             Sign in</Link>.</p>
            
             </div>
          </div>
          </div>
          </div>
        );
    }
}
