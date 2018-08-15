import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../../static/img/LovingfossLogoFinal.jpg'

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
       <nav className="navbar">
         <div className="container">
           <div className="navbar-brand">
             <Link to="/" className="navbar-item logo">
               <figure className="image">
                 <img src={logo} alt="Kaldi" style={{ width: '250px' }} />
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
                 <div class="navbar-item has-dropdown is-hoverable">
                  <div class="navbar-link">
                    About
                  </div>
                  <div class="navbar-dropdown">
                  <Link className="navbar-item" to="/about/services">
                    Services
                  </Link>
                  <Link className="navbar-item" to="/about/investments">
                    Investment Opportunities
                  </Link>

                  </div>
                </div>
               <Link className="navbar-item"
                 to="/team">Team</Link>
               <Link className="navbar-item"
                 to="/portfolio">Portfolio</Link>
               <Link className="navbar-item"
                 to="/contact">Contact</Link>

             </div>
           </div>

         </div>
       </nav>
     )
   }
}

export default Navbar
