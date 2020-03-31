import React, {Component} from 'react';
import {connect} from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import Main from './views/Main';
import Login from './views/Login';
import List from './views/List';

class App extends Component() {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <>
      <Route exact path='/' component={List}/>
      <Route path='/login' component={Login}/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {})(App);