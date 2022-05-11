import React from "react";
import axios from "axios";

class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/getUsers", {
            headers: {
                "authorization": this.props.authToken
            }
        })
            .then(res => {
                this.setState({
                    users: res.data
                })
            });
    }


    delClick = (param) => {
        fetch('http://localhost:8080/delUser/' + param, {
            method: 'DELETE',
            headers: {
                'authorization': this.props.authToken
            }
        })
            .then(res => {
                res.json()
                    .then(data => {
                        console.log('http://localhost:8080/delUser/' + param);
                    })
            });
    }



    render() {
        return (
            <div className="container-sm">
                <h1 className="text-center">User Table</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(x =>
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            <td>{x.password}</td>
                            <td>{x.type}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={() => this.delClick(x.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserTable;