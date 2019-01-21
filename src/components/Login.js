import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">

                                <img src='http://chittagongit.com//images/pos-system-icon/pos-system-icon-12.jpg' className="center"/>

                                <h5 class="card-title text-center">Sign In</h5>

                                <form class="form-signin">                                   

                                    <div class="form-label-group">
                                        <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus />
                                        <label for="inputUsername">Username</label>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                        <label for="inputPassword">Password</label>
                                    </div>
                                    
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>

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