import React from "react"

import logo from '../../static/img/MiniLogoFinal.jpg'

const Footer = () => (
  <footer className="footer">
  <div className="container">
    <div className="has-text-white">
    <div className="columns">
      <div className="column is-4 has-text-centered">
      <img src={logo} width="100px" />
        <h3 className="subtitle has-text-white">Lovingfoss Energy</h3>
      <p>
        27270 Rolling Hills Ave<br/>
        Canyon Country, CA 91387
      </p>
      <p>
        <a href="tel:6612507577">661-250-7577</a> - Office<br/>
        661-250-7577 - Fax
      </p>
      </div>
      <div className="column is-8">
        <nav className="level">
          <p className="level-item has-text-centered">
            <a className="link is-info">About</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Team</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Portfolio</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Contact</a>
          </p>
        </nav>
      </div>
    </div>
    </div>
  </div>
  </footer>
)

export default Footer
