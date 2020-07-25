import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Header from "../components/Header/Header";
import PostList from "../components/PostList";

import "../styles/style.scss";
const IndexPage = ({ data }) => {
  const posts = useMemo(() => data ? data.allMarkdownRemark.nodes : [], [data]);
  return (
    <div>
      <SEO title="Home" />
      <Header />
      <div className="hero">
        <Img
          style={{ width: "100%", height: 512 }}
          imgStyle={{ objectFit: "cover", filter: "brightness(0.5)" }}
          fluid={data.file.childImageSharp.fluid}
          alt="Blog hero"
        />
        <div className="presentation">
          {
            "Je suis étudiant en L3 Informatique, j'ai d'abord appris à développer en autodidacte et je continue encore à m'auto-former sur les technologies de mon choix. J'ai décidé d'ouvrir ce blog pour partager mes conseils/découvertes concernant le développement, les technologies que j'utilise."
          }
        </div>
      </div>
      <div className="content">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export const query = graphql`
  query HomePageQuery {
    file(relativePath: { eq: "arch-hero.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(locale: "fr", formatString: "dddd Do MMM YYYY")
          title
          hero {
            childImageSharp {
              fixed(width: 200, height: 200, fit: COVER, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          tags {
            tag
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
