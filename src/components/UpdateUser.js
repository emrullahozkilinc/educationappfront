import React, {Component} from 'react';

class UpdateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changedUser: {
                id: "",
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
                <td hidden={true}><form id="form1" onSubmit={this.saveSubmit }></form></td>
                <td><input form="form1" placeholder={this.props.x.id} onChange={() =>
                    this.setState(
                        {...this.state, changedUser:{
                                ...this.state.changedUser,
                                id:this.props.x.id
                            }}
                    )} className="form-control-sm"/></td>
                <td><input form="form1" placeholder={this.props.x.name} onChange={() =>
                    this.setState(
                        {...this.state, changedUser:{
                                ...this.state.changedUser,
                                name:this.props.x.name
                            }}
                    )} className="form-control-sm"/></td>
                <td><input form="form1" placeholder={this.props.x.username} onChange={() =>
                    this.setState(
                        {...this.state, changedUser:{
                                ...this.state.changedUser,
                                username:this.props.x.username
                            }}
                    )} className="form-control-sm"/></td>
                <td><input form="form1" placeholder={this.props.x.password} onChange={() =>
                    this.setState(
                        {...this.state, changedUser:{
                                ...this.state.changedUser,
                                password:this.props.x.password
                            }}
                    )} className="form-control-sm"/></td>
                <td><input form="form1" placeholder={this.props.x.type} onChange={() =>
                    this.setState(
                        {...this.state, changedUser:{
                                ...this.state.changedUser,
                                type:this.props.x.type
                            }}
                    )} className="form-control-sm"/></td>
                <td><input form="form1" type="submit" className="btn btn-success" value="Save"/></td>
            </tr>
        );
    }
}

export default UpdateUser;