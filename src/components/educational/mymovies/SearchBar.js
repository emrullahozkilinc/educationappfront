import React, {Component} from 'react';

class SearchBar extends Component {
    formSub = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.formSub}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={this.props.searchMovie}
                               type="text"
                               className="form-control"
                               placeholder="Search movies..."
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;