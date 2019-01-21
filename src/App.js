import React, { Component } from 'react';
import Login from './components/Login';

class App extends Component {
  render() {
    // make a call to backend with cookie to update status whether logged in or not
    const loggedin = false;
    if(loggedin){
      return <h1>Welcome back</h1>
    }else{
      return <Login />;
    }
  }
}

export default App;
