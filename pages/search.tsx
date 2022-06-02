import React, {useEffect, useMemo, useState} from "react";

import Header from "../components/Header/Header";
import PostList from "../components/PostList";
import {buildGetPosts} from "../utils";
import {PostType} from "../PostType";
import {useRouter} from "next/dist/client/router";


type PropTypes = {
  posts: PostType[]
}

const Search: React.FC<PropTypes> = ({posts}) => {
  const [search, setSearch] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();

  const tagList = useMemo(() => {
    return posts.reduce<string[]>((res, post) => {
      post.data.tags.forEach((tag) => {
        if (res.indexOf(tag.tag) === -1) res.push(tag.tag);
      })
      return res;
    }, []);
  }, [posts]);

  useEffect(() => {
    if (router.query.q) setSearch(router.query.q as string)
  }, [router]);

  const filteredPosts = useMemo(() => {
    const searchReg = new RegExp(search, "i");

    return posts.filter(post => {
      const postTags = post.data.tags.map(({tag}) => tag.toLowerCase());

      if (search && !searchReg.test(post.data.title)) return false;
      if (tags.length > 0 && !tags.some(tag => postTags.includes(tag.toLowerCase()))) return false
      return true;
    });
  }, [posts, tags, search]);

  return (
    <div>
      <Header/>
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
                    if (tagInput) {
                      setTags(old => [...old, tagInput]);
                      setTagInput("");
                    }
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
                <button onClick={() => setTags([...tags.slice(0, i), ...tags.slice(i + 1)])}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </form>
        <PostList posts={filteredPosts}/>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = buildGetPosts();

  return {
    props: {posts},
  };
}

export default Search;
