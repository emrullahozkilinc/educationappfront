import React, {Component} from 'react';

class UpdateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changedUser: {
                name: "",
                username: "",
                password: "",
                type: ""
            }
        }
    }


    render() {
        return (
            <tr key={this.props.x.id}>
                <td hidden={true}><form id="form1" onSubmit={(e) => this.props.saveSubmit(e, this.state.changedUser, this.props.x.id)}></form></td>
                <td>{this.props.x.id}</td>
                <td><input form="form1" placeholder={this.props.x.name} onChange={(e) =>
                    this.setState(
                        {
                            ...this.state, changedUser: {
                                ...this.state.changedUser,
                                name: e.target.value
                            }
                        }
                    )} className="form-control-sm"/></td>
                <td><input form="form1" placeholder={this.props.x.username} onChange={(e) => {
                    this.setState(
                        {
                            ...this.state, changedUser: {
                                ...this.state.changedUser,
                                username: e.target.value
                            }
                        }
                    )
                    console.log()
                }} className="form-control-sm"/></td>
                <td><input form="form1" placeholder={this.props.x.password} onChange={(e) =>
                    this.setState(
                        {...this.state, changedUser:{
                                ...this.state.changedUser,
                                password:e.target.value
                            }}
                    )} className="form-control-sm"/></td>
                <td><select form="form1" placeholder={this.props.x.type} onChange={(e) =>
                    this.setState(
                        {...this.state, changedUser:{
                                ...this.state.changedUser,
                                type:e.target.value
                            }}
                    )} className="form-control-sm">
                    <option value="student">student</option>
                    <option value="educator">educator</option>
                </select></td>
                <td><input form="form1" type="submit" className="btn btn-success" value="Save"/></td>
            </tr>
        );
    }
}

export default UpdateUser;