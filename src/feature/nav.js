import React,{Component} from 'react';

// class sideNav extends Component{
  
// }
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
      }
    
      handleOpen = () => {
        this.setState({ isOpen: true })
      }
    
      handleClose = () => {
         this.setState({ isOpen: false })
      }
    
      render() {
        return (
           <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                <h5 class="text-white">Collapsed content</h5>
                <h5 class="text-white">Popular choice of this area</h5>
                <h5 class="text-white">About us</h5>
                {/* <span class="text-muted">Please hire me!</span> */}
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark" id='title'><b>Food-swipe!</b>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            </div>
        )
      }
    }
export default Nav;