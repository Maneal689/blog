import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {PostType} from "../PostType";
import {marked} from "marked";

const PostList: React.FC<{ posts: PostType[] }> = ({posts}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  function getExcerpt(post: PostType) {
    const textLength = 160;
    if (typeof window === "undefined") return "";
    const parser = new DOMParser();
    let projectDoc: Document;
    projectDoc = parser.parseFromString(
      marked(post.content),
      "text/html",
    );
    // Get content in html document

    const text = projectDoc.body.innerText; // Get only text without HTML tags
    return text.slice(0, textLength) + (text.length > textLength ? "..." : ""); // Get excerpt
  }

  if (posts && posts.length > 0)
    return (
      <ul className="post-list">
        {posts.map((post, i) => (
          <li key={`post-${i}`}>
            <a
              href={post.data.slug}
              title={`Voir le post "${post.data.title}"`}
            >
              <img
                style={{
                  flexBasis: 200,
                  flexGrow: 0,
                  flexShrink: 0,
                  objectFit: "contain"
                }}
                src={post.data.hero}
              />
              <div className="post-info">
                <div>
                  <div className="post-header">
                    <h2>{post.data.title}</h2>
                    <small className="text-muted">
                      Publié le {post.data.date}
                    </small>
                  </div>
                  <div className="post-excerpt">{mounted && getExcerpt(post)}</div>
                </div>
                <ul className="tag-list">
                  {post.data.tags.map(({tag}, index) => (
                    <li key={`${post.data.title}-tag-${index}`}>
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

export default PostList;
