import {useEffect, useState} from "react";

function UserTable() {
    const [users, setUsers] = useState([]);
    

     useEffect(() =>{
        fetch('http://localhost:8080/getUsers')
            .then(res => {
                res.json()
                    .then(data => {
                        setUsers(data);
                    })
            });
     }, []);

    function delClick(param) {
        fetch('http://localhost:8080/delUser/' + param, {
            method: 'DELETE'
        })
            .then(res => {
                res.json()
                    .then(data => {
                        console.log(data);
                    })
            });
    }




        return (
            <div>
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
                    {users.map(x =>
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            <td>{x.password}</td>
                            <td>{x.type}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={delClick}>Delete</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
}

export default UserTable;