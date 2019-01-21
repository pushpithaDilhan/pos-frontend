import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">

                                <img src='http://chittagongit.com//images/pos-system-icon/pos-system-icon-12.jpg' className="center"/>

                                <h5 className="card-title text-center">Sign In</h5>

                                <form className="form-signin">                                   

                                    <div className="form-label-group">
                                        <input type="text" id="inputUsername" className="form-control" placeholder="Username" required autofocus />
                                        <label for="inputUsername">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label for="inputPassword">Password</label>
                                    </div>
                                    
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;