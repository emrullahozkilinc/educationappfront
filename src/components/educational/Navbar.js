import React from "react";

class Navbar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            kadi : "Murat"
        }
    }

    onClickEvent(num,e){
        this.setState({
            kadi: "asc"
        })
        console.log(this.state.kadi)
    }

    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.onClickEvent.bind(this, 55)}>Success</button>
            </div>
        );
    }
}

export default Navbar;