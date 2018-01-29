import React, { Component } from 'react';
import './movie.css';

class Movie extends Component {
	render() {
		return (
			<div>
				<MoviePoster />
			</div>
		);
	}
}

class MoviePoster extends Component {
	render() {
		return (
			<img src="https://cdn.mirror.wiki/http://img.movist.com/?img=/x00/04/72/45_p1.jpg" alt=""/>
		);
	}
}

export default Movie;