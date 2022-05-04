import React, {Component} from 'react';
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

class Movies extends Component {

    state = {
        movies: [],
        searchQuery:""
    }

    async componentDidMount() {
        const URL = "http://localhost:3002/movies";
        const response = await fetch(URL);
        const items = await response.json();
        this.setState({movies: items});
        console.log(this.state.movies);
    }

    delMovie = (movie) => {
        const newMovies = this.state.movies.filter(m => m.id !== movie.id);
        this.setState({movies: newMovies});
    }

    bringMovie = (event) => {
        this.setState({searchQuery: event.target.value});
    }

    render() {
        let filteredMovies = this.state.movies.filter(m => { return m.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())});

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovie={this.bringMovie}/>
                    </div>
                </div>
                <MovieCard movieList={filteredMovies} delMovie={this.delMovie}/>
            </div>
        );
    }
}

export default Movies;