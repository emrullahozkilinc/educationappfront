import React, {Component} from 'react';

class SearchBar extends Component {
    formSub = (event) => {
        event.preventDefault();
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
                                className="form-control"
                                placeholder="Type Movie Id"
                        />
                    </div>
                    <div>
                        <button type="button"
                                className="btn btn-md btn-primary"
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