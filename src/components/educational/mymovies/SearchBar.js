import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {value:""}
    }

    formSub = (event) => {
        event.preventDefault();
    }

    textVal = (event) => {
        this.setState({
           value:event.target.value
        });
    }

    addMovieSubmit = (event) => {
        this.props.addMovie(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.formSub}>
                <div className="form-row mb-5">
                    <div className="col-8">
                        <input onChange={this.props.searchMovie}
                               type="text"
                               className="form-control"
                               placeholder="Search movies..."
                        />
                    </div>
                    <div className="col-3">
                        <input  type="text"
                                onChange={this.textVal}
                                className="form-control"
                                placeholder="Type Movie Id"
                        />
                    </div>
                    <div>
                        <button type="button"
                                className="btn btn-md btn-primary"
                                onClick={this.addMovieSubmit}
                                style={{float:'right'}}>
                        Add Movie
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;