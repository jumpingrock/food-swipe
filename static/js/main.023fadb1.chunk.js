(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a,l=n(0),o=n.n(l),r=n(10),c=n.n(r),s=(n(18),n(8)),i=n(1),u=n(2),d=n(5),g=n(4),m=n(3),p=n(6),h=(n(19),n(20),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(g.a)(t).call(this,e))).handleOpen=function(){n.setState({isOpen:!0})},n.handleClose=function(){n.setState({isOpen:!1})},n.state={isOpen:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"pos-f-t"},o.a.createElement("div",{class:"collapse",id:"navbarToggleExternalContent"},o.a.createElement("div",{class:"bg-dark p-4"},o.a.createElement("h5",{class:"text-white"},"Collapsed content"),o.a.createElement("h5",{class:"text-white"},"Popular choice of this area"),o.a.createElement("h5",{class:"text-white"},"About us"))),o.a.createElement("nav",{class:"navbar navbar-dark bg-dark",id:"title"},o.a.createElement("b",null,"Food-swipe!"),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"}))))}}]),t}(l.Component)),v=n(7),f=n.n(v),w=n(11),E=function(){return new Promise(function(e,t){navigator.geolocation.getCurrentPosition(function(t){console.log(t),console.log(t.coords.latitude,t.coords.longitude),e(new window.google.maps.LatLng(t.coords.latitude,t.coords.longitude))},function(e){console.log("getCurrentPosition Error",e)},{enableHighAccuracy:!0})})};function b(){return(b=Object(w.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:n=e.sent,console.log(n),a=new window.google.maps.Map(document.getElementById("map"),{center:n,zoom:17}),t(a,n);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var x=function(e){return b.apply(this,arguments)},O=function(e){return e.results.map(function(e){if(void 0!==e.photos&&e.photos.length>0){console.log(e.name);var t=e.photos[0].getUrl();return o.a.createElement("div",{className:"boxes"},o.a.createElement("div",{className:"place"},o.a.createElement("img",{src:t,alt:e.name,className:"img-fluid"}),o.a.createElement("br",null)),o.a.createElement("h3",null,e.name),o.a.createElement("h5",null,e.vicinity),o.a.createElement("h5",null,"Rating (",e.user_ratings_total,"): ",e.rating),o.a.createElement("h5",null,"Price: ",e.price_level))}return null})},y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(d.a)(this,Object(g.a)(t).call(this))).nextResultHandler=function(){var t=Object(m.a)(e);x(function(e,n){new window.google.maps.places.PlacesService(e).nearbySearch({location:n,rankBy:window.google.maps.places.RankBy.DISTANCE,keyword:["restaurant"],opennow:!0,pagetoken:t.state.nextpage},function(e,n,a){t.state.results.length<=0?t.setState({results:e,nextPage:a.A}):t.setState(function(t){return{nextPage:a.A,scrolling:!1,results:[].concat(Object(s.a)(t.results),Object(s.a)(e))}},function(){var e=t.state.recallAPI;!0===t.state.recallAPI&&(a.nextPage(),t.setState({recallAPI:!e}))})})})},e.scrollHandler=function(t){if(!e.state.scrolling){var n=document.querySelector("#end"),a=n.offsetTop+n.clientHeight;window.pageYOffset+window.innerHeight>a-1&&e.setState({scrolling:!0},e.nextResultHandler)}},e.componentDidMount=function(){e.nextResultHandler(),e.scrollListener=window.addEventListener("scroll",function(t){e.scrollHandler(t)})},e.state={nextPage:"",recallAPI:!0,results:[],opennow:!0,maxprice:0,pagetoken:!0,searchby:"radius",scrolling:!1},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.state.results.length),o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-sm-2"}),o.a.createElement("div",{class:"col-xl"},o.a.createElement("br",null),o.a.createElement(O,{results:this.state.results})),o.a.createElement("div",{class:"col-sm-2"})),o.a.createElement("div",{id:"end"})))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.023fadb1.chunk.js.map