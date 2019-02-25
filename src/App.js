import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
import initMap from './location.js'

// var keyword = "food", radius = 200, location = getLocation();
const API_KEY = process.env.REACT_APP_API_KEY;

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
  
  state = {
    posts: [],
    currentLoc: [],
    gResult: []

  }

  
  componentDidMount() {

    function nearby(map,pyrmont) {
      var service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        { location: pyrmont, radius: 500, type: ['restaurant'] },
        function (results, status, pagination) {
          console.log(results)
        });
    }

    initMap(nearby);
    //using GOOGLE MAP API (nearby search)
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
    // axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?').then(response => {this.setState({post: response.data});})
    // getLocation();
    // axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.3032867,103.82743389999999&radius=200&keyword=food&opennow&key=AIzaSyAjE1DfK0kK-mg0BfXOAYdCqauXjBAn73g').then(response => {
    //   this.setState({post: response.data});
    //   console.log(response.data);

    // }) 
    // let result = Promise.resolve(this.initMap)
    // initMap()
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
    //   this.setState({ post: response.data });
    //   console.log(response.data);


    // })
    // https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters
    // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY

  }
  render() {
   
    // const posts = this.state.posts.map(post => {
      // return <ol>{post}</ol>
    // })

    return (
      <div className="App">
        <h1>Cawabunggaaaa</h1>
        <p>{API_KEY}</p>
        <p>{this.state.gResult}</p>
        <p>{this.state.posts}</p>
        <div className="Posts" >
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
