import React, { Component } from 'react';
import Login from './components/Login';
import OrderList from './components/OrderList';
import Order from './components/Order';

class App extends Component {
  render() {
    // make a call to backend with cookie to update status whether logged in or not
    const loggedin = "order";
    if(loggedin == "orderlist"){
      return <OrderList />
    }
    if(loggedin == "order"){
      return <Order />
    }else{
      return <Login />;
    }
  }
}

export default App;
