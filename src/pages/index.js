import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return ( 
      <div>
      <section class="hero is-medium bg-image">
        <div class="hero-body">
            <div class="container">
              <h1 class="title has-text-white">
              Medium title
            </h1>
              <h2 class="subtitle has-text-white">
              Medium subtitle
            </h2>
          </div>
        </div>
      </section>
      <section class="section">
       <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat officia similique quia. Laborum ad molestiae exercitationem facere beatae recusandae ipsum. Natus quis beatae sint aliquam illo commodi fugit incidunt molestias.
        </h2>
        </div>
       </section>
      </div>
      

    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
