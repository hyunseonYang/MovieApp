import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';


function Movie({title, poster}) {
	return (
		<div>
			<MoviePoster poster={poster} />
			<div>{title}</div>
		</div>
	);
}

function MoviePoster({poster}) {
	return (
		<img src={poster} width='200' alt=''/>
	);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired
}

export default Movie;