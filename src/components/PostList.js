import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function PostList({ posts }) {
  if (posts && posts.length > 0)
    return (
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
                      <small>#{tag}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    );
  else return <div className="no-post">{"Pas d'article trouvé"}</div>;
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
