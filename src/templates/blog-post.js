import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/Header/Header";

import "../styles/style.scss";

function BlogPost({ data }) {
  data = data.markdownRemark;
  return (
    <div>
      <SEO title="Home" />
      <Header />
      <div className="hero">
        <Img
          style={{ width: "100%", maxHeight: 1024 }}
          imgStyle={{ objectFit: "cover", filter: "brightness(0.3)" }}
          fluid={data.frontmatter.hero.childImageSharp.fluid}
          alt={`${data.frontmatter.title} hero`}
        />
        <div className="presentation">
          <div>
            <h1>{data.frontmatter.title}</h1>
            <small>Publié le {data.frontmatter.date}</small>
            <ul className="tag-list">
              {data.frontmatter.tags.map(({ tag }, i) => (
                <li key={`${data.frontmatter.title}-tag-${i}`}><small>#{tag}</small></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="content blog">
        <div className="text-muted" style={{ textAlign: "center" }}>
          {data.frontmatter.desc}
        </div>
        <article dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
    </div>
  );
}

// $slug is sent by context in /gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        date(locale: "fr", formatString: "dddd Do MMM YYYY")
        tags {
          tag
        }
        hero {
          childImageSharp {
            fluid(maxHeight: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;
