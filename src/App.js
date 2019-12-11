import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Registration from './components/Registration';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  return (
    <div>
  
    <Router>
    <div>
  <Header/>
    <Footer />
  </div>
   <Switch>
   <Route exact path="/" component={Registration}/>
     <Route exact  path='/login' component={Login}/>
     </Switch>
  
  
    </Router>
    </div>
  );
}
}

export default App;
