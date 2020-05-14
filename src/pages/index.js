import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Header from "../components/Header/Header";

import "../styles/style.scss";
const IndexPage = ({ data }) => {
  const posts = useMemo(() => data.allMarkdownRemark.nodes, []);
  return (
    <div>
      <SEO title="Home" />
      <Header />
      <div className="hero">
        <Img
          style={{ width: "100%", maxHeight: 350 }}
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
        <ul className="post-list">
          {posts.map((post, i) => (
            <li key={`post-${i}`}>
              <a
                href={post.fields.slug}
                title={`Voir le post "${post.frontmatter.title}"`}
              >
                <Img
                  style={{
                    flexBasis: 200,
                    flexGrow: 0,
                    flexShrink: 0,
                  }}
                  fixed={post.frontmatter.hero.childImageSharp.fixed}
                  alt={`${post.frontmatter.title} hero`}
                />
                <div className="post-info">
                  <div>
                    <div className="post-header">
                      <h2>{post.frontmatter.title}</h2>
                      <small className="text-muted">
                        Publié le {post.frontmatter.date}
                      </small>
                    </div>
                    <div className="post-excerpt">{post.excerpt}</div>
                  </div>
                  <ul className="tag-list">
                    {post.frontmatter.tags.map(({ tag }, index) => (
                      <li key={`${post.frontmatter.title}-tag-${index}`}>
                        <small>{tag}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
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
    allMarkdownRemark {
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
              fixed(width: 200, height: 200) {
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
