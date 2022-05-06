import React, {Component} from 'react';
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import axios from "axios";
import AddMovie from "./AddMovie"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Movies extends Component {

    state = {
        movies: [],
        searchQuery:"",
        api_key:"462f7af511aaddd90d14548652296979",
        session_id:"3eba5c2cdca2fd2c9d2a9b736f2dcc19d1752a7f",
        list_id:"8201286"
    }

    async componentDidMount() {
        this.updateMovieList();
    }

    async componentDidUpdate() {
        this.updateMovieList();
    }

    updateMovieList = async () => {
        const resp = await axios.get(`https://api.themoviedb.org/3/list/${this.state.list_id}?api_key=${this.state.api_key}&language=en-US`);
        this.setState({
            movies: resp.data.items
        })
    }

    delMovie = async (movie) => {
        const URL = `https://api.themoviedb.org/3/list/${this.state.list_id}/remove_item?session_id=${this.state.session_id}&media_id=${movie.id}&api_key=${this.state.api_key}`;
        await axios.post(URL);
        const newMovies = await axios.get(`https://api.themoviedb.org/3/list/${this.state.list_id}?api_key=${this.state.api_key}&language=en-US`);
        this.setState({movies: newMovies.data.items});
    }

    addMovie = async (value) => {
        if(!value.match("^[1-9]+[0-9]*$"))
            return;
        const URL = `https://api.themoviedb.org/3/list/${this.state.list_id}/add_item?media_id=${value}&api_key=${this.state.api_key}&session_id=${this.state.session_id}`;
        await axios.post(URL)
    }

    bringMovie = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    render() {
        let filteredMovies = this.state.movies.filter(m => {
            return m.title.toLowerCase().includes(
                this.state.searchQuery.toLowerCase()
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovie={this.bringMovie} addMovie={this.addMovie}/>
                    </div>
                </div>
                <MovieCard movieList={filteredMovies} delMovie={this.delMovie}/>
            </div>
        );
    }
}

export default Movies;