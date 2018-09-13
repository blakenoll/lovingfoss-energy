import React from "react"
import Link from 'gatsby-link'

import logo from '../../static/img/logolovingwhite.png'

const Footer = () => (
  <footer className="footer">
  <div className="container">
    <div className="has-text-white">
    <div className="columns">
      <div className="column is-4">
      <img src={logo} width="73px" />
        <h3 className="is-size-4 has-text-white">Lovingfoss Energy</h3>
      </div>
      <div className="column is-4">
        <p className="is-size-4 has-text-white">Contact Info</p>
        <hr/>
        <p>
        27270 Rolling Hills Ave<br/>
        Canyon Country, CA 91387
      </p>
      <br />
      <p>
        <a href="tel:6612507577">661-250-7577</a> - Office<br/>
        661-250-7577 - Fax
      </p>
      </div>
      <div className="column is-4">
      <h3 className="is-size-4 has-text-white">Links</h3>
      <hr/>
          <p>
          <Link to="/about/services">Services</Link>
          </p>
          <p>
          <Link to="/about/investments">Investment Opportunities</Link>
          </p>
          <p>
          <Link to="/team">Team</Link>
          </p>
          <p>
          <Link to="/portfolio">Portfolio</Link>
          </p>
          <p>
          <Link to="/contact">Contact</Link>
          </p>
      </div>
    </div>
    </div>
  </div>
  </footer>
)

export default Footer
