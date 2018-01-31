import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		poster: PropTypes.string.isRequired
	}


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

	static propTypes = {
		poster: PropTypes.string.isRequired
	}

	render() {
		return (
			<img src={this.props.poster} width='200' alt=''/>
		);
	}
}

export default Movie;