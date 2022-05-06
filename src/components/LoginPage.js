import React, {Component} from 'react';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    loginSubmit = (e) => {
        e.preventDefault();
    }

    changedUname = (e) => {
        this.setState({
            ...this.state,
            username: e.target.value
        });
    }

    changedPassword = (e) => {
        this.setState({
            ...this.state,
            password: e.target.value
        });
    }

    render() {
        return (
            <div className="container-sm">
                <div className="login-form">
                    <form onSubmit={this.loginSubmit}>
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input type="text" onChange={this.changedUname} className="form-control" placeholder="Username" required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={this.changedPassword} className="form-control" placeholder="Password" required="required"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                            <a href="/" className="float-right">Forgot Password?</a>
                        </div>
                    </form>
                    <p className="text-center"><a href="/">Create an Account</a></p>
                </div>
            </div>
        );
    }
}

export default LoginPage;