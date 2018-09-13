import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, content, contentComponent, don, ashley }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
       <section className="hero bg-image">
        <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-white has-text-centered">
              {title}
            </h1>
          </div>
        </div>
      </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
              <PageContent className="content" content={content} />
          </div>
        </div>
        <div className="columns">
          <div className="column is 12">
            {don}
          </div>
        </div>
      </div>
    </section>
    </div>
   
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      don={post.frontmatter.don}
      ashley={post.frontmatter.ashley}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        don
        ashley
      }
    }
  }
`
