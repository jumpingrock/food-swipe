import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import './ApiReq/ApiReq.js'
const API_KEY = process.env.REACT_APP_API_KEY;

class Apicom extends Component {
  componentDidMount () {
//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=YOUR_API_KEY
    // axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters').then(response => {console.log(response)})
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {console.log(response)})
    
      // console.log(response.data)
    });
  }
}

class App extends Component {
  state ={
    posts: []
  }
  render() {
    
    const posts = this.state.posts.map(post=>{
      return<Post/>
    })

    return ( 
      <div className="App">
        <h1>Cawaabungaaa</h1>
        <h1><Post/></Post></h1>
        <
      </div>
    );
  }
}

export default App;
