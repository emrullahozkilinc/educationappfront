import React, {Component} from 'react';

const UserContext = React.createContext();

export class UserProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users : [
                {
                    id : 1,
                    name : "Mustafa Ali",
                    salary : "2600",
                    department : "Dağıtım"
                },
                {
                    id : 2,
                    name : "Muhammet Girgin",
                    salary : "9000",
                    department : "Perakende"
                },
                {
                    id : 3,
                    name : "Emre Polat",
                    salary : "5000",
                    department : "Satış"
                },
                {
                    id : 4,
                    name : "Lale Yormaz",
                    salary : "6500",
                    department : "İnsan Kaynakları"
                }
            ]
        }
    }


    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;