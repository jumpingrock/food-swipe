import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './feature/nav.js'
import initMap from './location.js'
import Place from './feature/places.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextPage: "",
      recallAPI: true,
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
          if(that.state.results.length <= 0){
            that.setState({ results: results,nextPage: pagination.A  })
          }else{
            that.setState(function(prevState)  {
              return {
            
                nextPage: pagination.A,
                scrolling: false,
                results: [...prevState.results,...results]
              }
              
            },()=>{
              let p = that.state.recallAPI
              if (that.state.recallAPI === true ){
                pagination.nextPage()
                that.setState({recallAPI: !p})
              }
              })
          
            }
        });
    }
    initMap(nearby);
  }
  scrollHandler = (event) =>{
    // console.log("this is running")
    const {scrolling} =this.state
    if (scrolling) return
    const lastDiv = document.querySelector('#end')
    const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight
    const bottomOffset = 1
    if(pageOffset > lastDivOffset - bottomOffset) {
      // console.log("this is from scollhandler")
      // this.nextResultHandler();
      this.setState({scrolling: true}, this.nextResultHandler);
    }
  }

  componentDidMount = () => {
    this.nextResultHandler()
    this.scrollListener = window.addEventListener('scroll',(event) =>{
      this.scrollHandler(event)
    })
  }
  render() {

    console.log(this.state.results.length)
    return (
      <div > 
        <Nav/>
        
        <div class="container" >
              
            <div class="row" >
                
              <div class="col-sm-2" >
                
              </div>
              <div class="col-xl" >
                <br/>
                <Place results={this.state.results} />
              </div>
              <div class="col-sm-2" >
                
              </div>
            </div>
            <div id="end"></div>
          </div>

    </div>
      
    );
  }
}

export default App;
