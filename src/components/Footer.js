import React from "react"

import logo from '../../static/img/MiniLogoFinal.jpg'

const Footer = () => (
  <footer className="footer">
  <div className="container">
    <div className="has-text-white">
    <div className="columns">
      <div className="column is-4">
      <img src={logo} width="100px" />
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
            <a className="link is-info">Services</a>
          </p>
          <p>
            <a className="link is-info">investment Opportunities</a>
          </p>
          <p>
            <a className="link is-info">Team</a>
          </p>
          <p>
            <a className="link is-info">Portfolio</a>
          </p>
          <p>
            <a className="link is-info">Contact</a>
          </p>
      </div>
    </div>
    </div>
  </div>
  </footer>
)

export default Footer
