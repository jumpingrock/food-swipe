import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
import initMap from './location.js'

// var keyword = "food", radius = 200, location = getLocation();
// const API_KEY = process.env.REACT_APP_API_KEY;

class FullPost extends Component {
  render() {
    let post = <p>Please Select a Post!</p>;
    post = (
      <div className="Fullpost">
        <h1>Title</h1>
        <p>Content</p>
        <div className="Edit">
          <button className="Delete">Delete</button>
        </div>
      </div>)
    return post
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      results: []

    }
    console.log(this.state)
  }
  componentDidMount = () => {
    let that = this
    //library to googles API is nested in index.html
    const nearby = (map, pyrmont) => {
      var service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        // { location: pyrmont, rankBy: google.maps.places.RankBy.DISTANCE, keyword: ['restaurant'], opennow: true,pagetoken: true },
        { location: pyrmont, radius:500, keyword: ['restaurant'], opennow: true,pagetoken: true },
        function (results, status, pagination) {
          console.log(results)
          console.log(status, pagination)
          that.setState({ results: results })

        });

    }

    initMap(nearby);

  }
  render() {

    const result = this.state.results.map(post => {
      console.log(post.name)
      console.log(post.rating)
      console.log(post.price_level)

      if (post.photos.length === 1) {
        // console.log(post.photos[0].getUrl())
        let photo = post.photos[0].getUrl()
        return (
          <div>
            <img src={photo} alt={post.name} height="400px" width="550px" />
            <ol>Name: {post.name}</ol>
            <ol>Address: {post.vicinity}</ol>
            <ol>Rating ({post.user_ratings_total}): {post.rating}</ol>
            <ol>Price: {post.price_level}</ol>
            <br />
          </div>
        )
      } else {
        result = null
      }
    })

    return (

      <div className="App">
        <h1>Cawabunggaaaa</h1>
        <p>hello</p>

        <div className="Posts" >
          <ul>
            {result}
          </ul>
          <FullPost />
        </div>
        <div id="map">
          {/* <ul>{posts}</ul> */}
        </div>
      </div>
    );
  }
}

export default App;
