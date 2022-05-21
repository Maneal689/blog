import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import Header from "../components/Header/Header";

import {buildGetPostBySlug, buildGetPosts} from "../utils";
import {PostType} from "../PostType";
import {NextPage} from "next";
import {marked} from "marked";


type PropTypes = {
  post: PostType
}

const Post: NextPage<PropTypes> = ({post}) => {
  return (
    <div>
      <Header/>
      <div className="hero">
        <img
          style={{width: "100%", maxHeight: 1024, objectFit: "cover", filter: "brightness(0.3)"}}
          src={post.data.hero}
          alt={`${post.data.title} hero`}
        />
        <div className="presentation">
          <div>
            <h1>{post.data.title}</h1>
            <small>Publié le {post.data.date}</small>
            <ul className="tag-list">
              {post.data.tags.map(({tag}, i) => (
                <li key={`${post.data.title}-tag-${i}`}><small>#{tag}</small></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="content blog">
        <div className="text-muted" style={{textAlign: "center"}}>
          {post.data.desc}
        </div>
        <article dangerouslySetInnerHTML={{__html: marked(post.content)}}/>
      </div>
    </div>
  );
}

export async function getStaticProps({params}: { params: { slug: string } }) {
  const {slug} = params;
  const post = buildGetPostBySlug(slug);
  return {props: {post}};
}

export async function getStaticPaths() {
  const projects = buildGetPosts();
  const paths = projects.map((post) => ({
    params: {
      slug: post.data.slug,
    },
  }));

  return {paths, fallback: false};
}

export default Post;
