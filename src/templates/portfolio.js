import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

const PortfolioItem = ({pItems}) => {
  return (
    <div className="columns">
      { pItems.map((item, key) => (
        <div key={key} className="portfolio-item column">
          {item.image != '' &&
          <img src={item.image} />
          }
          <p className="subtitle">{item.body}</p>
        </div>
        ))
      }
    </div>
  )
}

export const PortfolioPageTemplate = ({ title, content, contentComponent, mineral, equity }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="hero bg-image">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white">
            {title}
          </h1>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
              <PageContent className="content" content={content} />
              <h3 className="title">Large equity and acreage deals</h3>
              <PortfolioItem pItems={equity} />
              <hr />
              <h3 className="title">Mineral deals</h3>
              <PortfolioItem pItems={mineral} />
          </div>
        </div>
      </div>
    </section>
    </div>
    
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Portfoliopage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PortfolioPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      mineral={post.frontmatter.mineral}
      equity={post.frontmatter.equityandacreage}
    />
  )
}

Portfoliopage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Portfoliopage

export const aboutPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        equityandacreage {
          image
          body
        }
        mineral {
          image
          body
        }
      }
    }
  }
`
