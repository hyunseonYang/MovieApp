import React, { Component } from 'react';
import Movie from './Movie.js';


const movieTitles = [
  "헝거게임",
  "해리포터",
  "코코",
  "1987"
]

const movieImages = [
  "https://cdn.mirror.wiki/http://img.movist.com/?img=/x00/04/72/45_p1.jpg",
  "http://static.hubzum.zumst.com/hubzum/2017/11/13/17/9197709fcc4649038f9417ebd284775d.jpg",
	"http://cfile26.uf.tistory.com/image/9974BD4A5A545BA2355EF9",
	"https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmXfsSvhVXqELhETy7e4VSYcvXvLzddqGVBHCDiZprYE2C"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
