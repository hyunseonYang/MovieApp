import React, { Component } from 'react';
import './movie.css';

class Movie extends Component {
	render() {
		return (
			<div>
				<MoviePoster poster={this.props.poster} />
				<div>{this.props.title}</div>
			</div>
		);
	}
}

class MoviePoster extends Component {
	render() {
		return (
			<img src={this.props.poster} width='200' alt=''/>
		);
	}
}

export default Movie;