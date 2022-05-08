import React, {Component} from 'react';
import LoginPage from "./components/LoginPage";
import axios from "axios";
import UserTable from "./components/UserTable";

class App extends Component {
    state = {
        isLoggedIn: false,
        authToken: null
    }

    login = async (username, password) => {
        await axios.post("http://localhost:8080/login", {
            username: username,
            password: password
        }).then(data => {
            this.setState({
                isLoggedIn: true,
                authToken: data.headers["authorization"]
            });

        }).catch(err => {
            if (err.response.status === 403) {
                alert("Invalid username or password");
            } else {
                alert("Unknown error");
            }
        })
    }


    render() {
        if (this.state.isLoggedIn) {
            return <UserTable authToken={this.state.authToken}/>
        }
        return (
            <div>
                <LoginPage loginService={this.login}/>
            </div>
        );
    }
}

export default App;