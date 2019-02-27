import React, { Component } from 'react';
import './App.css';
import initMap from './location.js'
import Place from './feature/places.js'
// const API_KEY = process.env.REACT_APP_API_KEY;
class App extends Component {
  constructor() {
    super();
    this.state = {
      nextPage: "",
      recallAPI: "",
      results: [],
      opennow: true,
      maxprice: 0,
      pagetoken: true,
      searchby: "radius",
      scrolling: false,
      

    }
  }

  nextResultHandler = () => {
    let that = this
    //library to googles API is nested in index.html
    const nearby = (map, pyrmont) => {
      // console.log("hello world")
      var service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        { location: pyrmont, rankBy: window.google.maps.places.RankBy.DISTANCE, keyword: ['restaurant'], opennow: true, pagetoken: that.state.nextpage },
        // if (this.state.searchby == "radius"){
        // }
        // { location: pyrmont, radius: 200, keyword: ['restaurant'], opennow: this.state.opennow, maxprice: this.state.maxprice, pagetoken: this.state.nextPage },
        
        function (results, status, pagination) {
          console.log(results[0].name)
          // console.log(pagination)
          if(that.state.results.length <= 0){
            that.setState({ results: results,nextPage: pagination.A  })
            // console.log(pagination)
          }else{
            // console.log("in setState ELSE")
            that.setState(function(prevState)  {
              // console.log("in 88888 ELSE", prevState.results)

              return {
                nextPage: pagination.A,
                scrolling: false,
                results: [...prevState.results,...results]
              }
              
            },()=>{

              pagination.nextPage()

              })
            // console.log(pagination.A)
          
            }
        });
    }
    initMap(nearby);
  }
  scrollHandler = (event) =>{
    // console.log("this is running")
    const {scrolling} =this.state
    if (scrolling) return
    const lastDiv = document.querySelector('.col-sm')
    // console.log(lastDiv)
    const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight
    // console.log("lastdivoffset",lastDivOffset)
    const pageOffset = window.pageYOffset + window.innerHeight
    // console.log("pageoffset",pageOffset, window.pageYOffset,window.innerHeight)
    const bottomOffset = 1
    // console.log("pageOffset: "+ pageOffset + " lastDivOffset: "+lastDivOffset+" bottomOffset: "+bottomOffset)
    if(pageOffset > lastDivOffset - bottomOffset) {

      // this.nextResultHandler();
      this.setState({scrolling: true}, this.nextResultHandler);

    }
  }

  componentDidMount = () => {
    this.nextResultHandler()
    // console.log("within component didmount")
    this.scrollListener = window.addEventListener('scroll',(event) =>{
      this.scrollHandler(event)
    })
  }
  render() {
    console.log("helloloolol")
    console.log(this.state.results.length)
    return (

      <div className="App">
        <h1>Cawabunggaaaa</h1>
        <p>hello</p>
        <div className="Posts" >
          <Place results={this.state.results} />
        </div>
        <div id="map">
        </div>
      </div>
    );
  }
}

export default App;
