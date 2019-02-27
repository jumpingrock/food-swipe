import React,{Component} from 'react';


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
                <h4 class="text-white">Collapsed content</h4>
                <span class="text-muted">Toggleable via the navbar brand.</span>
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