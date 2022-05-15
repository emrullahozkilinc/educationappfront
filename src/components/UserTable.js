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
                    users: res.data
                })
            });
    }

    componentDidUpdate() {
        axios.get("http://localhost:8080/getUsers", {
            headers: {
                "authorization": this.props.authToken
            }
        }).then(res => {
            this.setState({
                users: res.data
            })
        });
    }

    delClick = (param) => {
        axios.delete('http://localhost:8080/delUser/' + param, {
            headers: {
                'authorization': this.props.authToken
            }
        }).then(res => {
            alert(res.data);
        });
    }

    saveSubmit = (param) => {
        /*
        axios.put('http://localhost:8080/delUser/' + param, {
            headers: {'authorization': this.props.authToken},
            data: {

            }
        }).then(res => {
            alert(res.data);
        });
         */
        console.log(this.state.changedUser);
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
                        } else {return (<UpdateUser x={x}/>);}}
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserTable;