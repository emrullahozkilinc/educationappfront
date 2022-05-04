import React from "react";
import './App.css';
import './components/User'
import Table from "./components/educational/Table";
import Button from "./components/educational/Button";

function App(){

    const users = [
        {
            id: 1,
            name: 'John',
            age: 30
        },
        {
            id: 2,
            name: 'Sara',
            age: 25
        },
        {
            id: 3,
            name: 'Mike',
            age: 27
        },
        {
            id: 4,
            name: 'Adam',
            age: 29
        }
    ];

    return (
        <div>
            <Button><Table user={users}/></Button>
            <Button><Table user={users}/></Button>
            <Button><Table user={users}/></Button>
        </div>
    );
}


export default App;
