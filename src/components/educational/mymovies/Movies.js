import React, {Component} from 'react';
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import axios from "axios";
import AddMovie from "./AddMovie"

class Movies extends Component {

    state = {
        movies: [],
        searchQuery:""
    }
/*
    async componentDidMount() {
        const URL = "http://localhost:3002/movies";
        const response = await fetch(URL);
        const items = await response.json();
        this.setState({movies: items});
        console.log(this.state.movies);
    }
*/
    async componentDidMount() {
        const resp = await axios.get("https://api.themoviedb.org/3/list/8201286?api_key=462f7af511aaddd90d14548652296979&language=en-US");
        this.setState({
            movies: resp.data.items
        })
    }

    delMovie = async (movie) => {
        const URL = `https://api.themoviedb.org/3/list/8201286/remove_item?session_id=3eba5c2cdca2fd2c9d2a9b736f2dcc19d1752a7f&media_id=${movie.id}&api_key=462f7af511aaddd90d14548652296979`
        await axios.post(URL);
        const newMovies = await axios.get("https://api.themoviedb.org/3/list/8201286?api_key=462f7af511aaddd90d14548652296979&language=en-US");
        this.setState({movies: newMovies.data.items});
    }

    addMovie = async (movie) => {

    }

    bringMovie = (event) => {
        this.setState({searchQuery: event.target.value});
    }

    render() {
        let filteredMovies = this.state.movies.filter(m => { return m.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())});

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