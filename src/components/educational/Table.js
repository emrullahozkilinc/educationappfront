import React from 'react';

const users = (props) => {
    return (
        // <table className="table">
        //     <thead>
        //     <tr>
        //         <td>ID</td>
        //         <td>NAME</td>
        //         <td>AGE</td>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {props.user.map(user =>
        //         <tr key={user.id}>
        //             <td>{user.id}</td>
        //             <td>{user.name}</td>
        //             <td>{user.age}</td>
        //         </tr>
        //     )};
        //     </tbody>
        // </table>
        <div>
            <ol>
                {props.user.map(user =>
                    <li key={user.id}>
                        {user.name}
                    </li>
                )}
            </ol>
        </div>
    );
};

users.defaultProps = {
    user : [
        {id: 1, name: 'John', age: 30},
        {id: 2, name: 'Sara', age: 25},
        {id: 3, name: 'Bill', age: 40}
    ]
};

export default users;