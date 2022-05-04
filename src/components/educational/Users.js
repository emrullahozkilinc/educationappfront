import React, {Component} from 'react';

class Users extends Component {
    render() {
        const {users} = this.props;

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>salary</th>
                            <th>department</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(u =>
                        <tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.salary}</td>
                            <td>{u.department}</td>
                        </tr>
                    )}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default Users;