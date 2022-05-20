import React from "react";
import axios from "axios";
import UpdateUser from "./UpdateUser";

class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            inputRowId: -1
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
                    ...this.state,
                    users: res.data.sort((a,b) => a.id - b.id)
                })
            });
    }

    componentDidUpdate() {
        axios.get("http://localhost:8080/getUsers", {
            headers: {
                "authorization": this.props.authToken
            }
        }).then(res => {
            if (JSON.stringify(this.state.users) !== JSON.stringify(res.data)) {
                this.setState({
                    ...this.state,
                    users: res.data.sort((a,b) => a.id - b.id)
                })
            }
        });
    }

    delClick = (param) => {
        axios.delete('http://localhost:8080/delUser/' + param, {
            headers: {
                'authorization': this.props.authToken
            }
        }).then(res => {
            this.setState({
                ...this.state,
                users: this.state.users.filter(user => user.id !== param)
            });
            alert(res.data);
        });
    }

    saveSubmit = (e, param, id) => {
        e.preventDefault();
        axios({
            method: 'put',
            url: 'http://localhost:8080/updateUser/' + id,
            headers: {
                'Authorization': this.props.authToken,
                'Content-Type': 'application/json'
            },
            data : JSON.stringify(param)
        }).then(res => {
            this.setState({
                ...this.state,
                inputRowId: -1,
                users:[]
            });
            alert(res.data)
        });
    }



    render() {
        return (
            <div className="container">
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
                    {this.state.users.map(x => {if (x.id !== this.state.inputRowId) {
                            return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.name}</td>
                                    <td>{x.username}</td>
                                    <td>{x.password}</td>
                                    <td>{x.type}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => this.setState({...this.state, inputRowId: x.id})}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => this.delClick(x.id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        } else {return (<UpdateUser x={x} saveSubmit={this.saveSubmit}/>);}}
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserTable;