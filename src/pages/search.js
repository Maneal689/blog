import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Header from "../components/Header/Header";
import SEO from "../components/seo";
import PostList from "../components/PostList";

import "../styles/style.scss";

function Search({ location, data }) {
  const [search, setSearch] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [wildSearch, setWildSearch] = useState(false);
  const [tags, setTags] = useState([]);

  const { posts, tagList } = useMemo(() => {
    const posts = data.allMarkdownRemark.nodes;
    const tagList = posts.reduce((res, post) => {
      res.push(...post.frontmatter.tags.map(({ tag }) => tag));
      return res;
    }, []);
    return { posts, tagList };
  }, [data]);
  useEffect(() => {
    if (location.state && location.state.q) setSearch(location.state.q);
  }, [location.state]);

  const filteredPosts = useMemo(() => {
    let searchReg = search;
    if (wildSearch) searchReg = Array.from(searchReg).join(".*");
    searchReg = new RegExp(searchReg, "i");
    return posts.filter(post => {
      const postTags = post.frontmatter.tags.map(({ tag }) => tag);
      let res = true;
      if (search && !searchReg.test(post.frontmatter.title)) res = false;
      if (tags.length > 0 && !tags.some(tag => postTags.includes(tag)))
        res = false;
      return res;
    });
  }, [posts, tags, wildSearch, search]);

  return (
    <div>
      <SEO title="Blog" />
      <Header />
      <div className="content search">
        <h2>Recherche avancée</h2>
        <form action="" onSubmit={e => e.preventDefault()}>
          <div>
            <div className="input">
              <label htmlFor="title-search-input">Titre:</label>
              <input
                type="text"
                name="title-search"
                id="title-search-input"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="input" style={{ justifyContent: "flex-start" }}>
              <label
                htmlFor="wild-check"
                className="text-muted"
                style={{ fontWeight: "normal" }}
              >
                Recherche approximative :
              </label>
              <input
                type="checkbox"
                id="wild-check"
                checked={wildSearch}
                onChange={e => setWildSearch(e.target.checked)}
              />
            </div>
            <div className="tag-search input">
              <label htmlFor="tag-search-input">Tags:</label>
              <div>
                <input
                  type="text"
                  id="tag-search-input"
                  name="tag-search"
                  list="tag-datalist"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                />
                <button
                  onClick={e => {
                    e.preventDefault();
                    if (tagInput) setTags(old => [...old, tagInput]);
                  }}
                >
                  +
                </button>
              </div>
              <datalist id="tag-datalist">
                {tagList.map((tag, i) => (
                  <option value={tag} key={`tag-suggest-${i}`}>
                    #{tag}
                  </option>
                ))}
              </datalist>
            </div>
          </div>
          <ul className="search-tag-list">
            {tags.map((tag, i) => (
              <li key={`selected-tag-${i}`}>
                #{tag}{" "}
                <button
                  onClick={() =>
                    setTags([...tags.slice(0, i), ...tags.slice(i + 1)])
                  }
                  dangerouslySetInnerHTML={{ __html: "&times" }}
                />
              </li>
            ))}
          </ul>
        </form>
        <PostList posts={filteredPosts} />
      </div>
    </div>
  );
}

Search.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query SearchPageQuery {
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

export default Search;
