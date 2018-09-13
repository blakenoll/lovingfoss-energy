import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const IFrame = ({iFrame}) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: `${iFrame}`}} />
    </div>
  )
}

export default class IndexPage extends React.Component {
  
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return ( 
      <div>
      <section className="hero is-medium bg-image">
        <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-white">
              Medium title
            </h1>
              <h2 className="subtitle has-text-white">
              Medium subtitle
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
       <div className="container">
        <h1 className="title">Section</h1>
        <h2 className="subtitle">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat officia similique quia. Laborum ad molestiae exercitationem facere beatae recusandae ipsum. Natus quis beatae sint aliquam illo commodi fugit incidunt molestias.
        </h2>
        </div>
       </section>
       <section className="section">
         <div className="container">
          <h1 className="title">Todays Oil Price</h1>
          <IFrame iFrame={'<IFRAME MARGINWIDTH="0" MARGINHEIGHT="0" FRAMEBORDER="0" SCROLLING="no" SRC="https://d32r1sh890xpii.cloudfront.net/widgets/crude/crudechart.html" width="206" height="220" title="WTI Chart" allowtransparency="true"></IFRAME>'} />
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
