import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    showOrClose = () => {
        this.setState({isShow: !this.state.isShow})
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.showOrClose}> Click here to see table. </button>
                {
                    this.state.isShow ? (
                        <div>
                            {this.props.children}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default Button;
