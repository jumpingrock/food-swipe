import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const ApiReq = (props) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({posts: response.data});
    
    return (
        
    )
}