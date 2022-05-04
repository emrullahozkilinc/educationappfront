import React, {Component} from 'react';

class User extends Component {
    render() {
        const {name, age, email} = this.props;
        return (
            <div>
                <ul>
                    <li>{name}</li>
                    <li>{age}</li>
                    <li>{email}</li>
                </ul>
            </div>
        );
    }
}

export default User;