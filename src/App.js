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
      nextPage: "",
      results: []

    }
  }
  nextResultHandler = () => {

  }
  
  componentDidMount = () => {
    let that = this
    //library to googles API is nested in index.html
    const nearby = (map, pyrmont) => {
      var service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        { location: pyrmont, rankBy: window.google.maps.places.RankBy.DISTANCE, keyword: ['restaurant'], opennow: true, pagetoken: that.nextPage },
        // { location: pyrmont, radius: 500, keyword: ['restaurant'], opennow: true, pagetoken: true },
        function (results, status, pagination) {
          console.log(results)
          console.log(pagination.A)
          that.setState({ results: results })
          that.setState({ nextPage: pagination.A })
          console.log(that.nextPage)

        });
    }
    initMap(nearby);
  }
  render() {

    let result = this.state.results.map(post => {
      if (post.photos.length === 1) {
        // console.log(post.name)
        // console.log(post.rating)
        // console.log(post.price_level)
        // console.log(post.photos[0].getUrl())
        let photo = post.photos[0].getUrl()
        return (
          <div>

            <img src={photo} alt={post.name} height="400px" width="550px" /><br />
            <h3>Name: {post.name}</h3>
            <h5>Address: {post.vicinity}</h5>
            <h5>Rating ({post.user_ratings_total}): {post.rating}</h5>
            <h5>Price: {post.price_level}</h5>

            
          </div>
        )
      } else {
        result = null
      }
    })

    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col">
      //       1 of 3
      //       <h1>Cawabunggaaaa</h1>
      //       <p>hello</p>
      //     </div>
      //     <div className="col-6 Posts" >
      //       2 of 3 (wider)
            
      //       {result}
            
      //     </div>
      //     <div className="col" id="map">
      //       3 of 3
      //     </div>
      //   </div>
      // </div>


      <div className="App">
        <h1>Cawabunggaaaa</h1>
        <p>hello</p>

        <div className="Posts" >
          <ul>
            {result}
          </ul>

        </div>
        <div id="map">

        </div>
      </div>
    );
  }
}

export default App;
