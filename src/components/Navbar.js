import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: ""
    }

    this.handleClick = this.handleClick.bind(this)
  }
   handleClick(event) { 
     if (this.state.isActive === "") {
       this.setState({isActive: "is-active"})
     } else {
       this.setState({ isActive: "" })
     }
   }

   render() {
     return(
       <nav className="navbar is-primary">
         <div className="container">
           <div className="navbar-brand">
             <Link to="/" className="navbar-item">
               <figure className="image">
                 {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
                 Lovingfoss Energy Logo
          </figure>
             </Link>
             <div role="button" className={"navbar-burger is-white " + this.state.isActive} aria-label="menu" aria-expanded="false" onClick={this.handleClick}>
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
               {}
             </div>
           </div>
           <div className={"navbar-menu " + this.state.isActive}>
             <div className="navbar-start">

             </div>
             <div className="navbar-end" onClick={this.handleClick}>
               <Link className="navbar-item"
                 to="/about">About</Link>
               <Link className="navbar-item"
                 to="/">Team</Link>
               <Link className="navbar-item"
                 to="/">Portfolio</Link>
               <Link className="navbar-item"
                 to="/">Services</Link>
               <Link className="navbar-item"
                 to="/">Contact</Link>

             </div>
           </div>

         </div>
       </nav>
     )
   }
}

export default Navbar
