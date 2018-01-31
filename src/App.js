import React, { Component } from 'react';
import Movie from './Movie.js';


const movies = [
  {
    title: '헝거게임',
    poster: 'https://cdn.mirror.wiki/http://img.movist.com/?img=/x00/04/72/45_p1.jpg'
  },
	{
		title: '해리포터',
		poster: 'http://static.hubzum.zumst.com/hubzum/2017/11/13/17/9197709fcc4649038f9417ebd284775d.jpg'
	},
	{
		title: '코코',
		poster: 'http://cfile26.uf.tistory.com/image/9974BD4A5A545BA2355EF9'
	},
	{
		title: '1987',
		poster: 'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmXfsSvhVXqELhETy7e4VSYcvXvLzddqGVBHCDiZprYE2C'
	}
]

class App extends Component {

	state = {
		greeting : 'hello'
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				greeting: 'hello again!'
			})
			},2000)
	}

  render() {
    return (
      <div className="App">
	      {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
