import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="wrapper">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <main>{children()}</main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,

}

export default TemplateWrapper
