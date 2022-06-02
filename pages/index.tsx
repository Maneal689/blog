import type {NextPage} from "next";
import marked from "marked";
import React, {useEffect, useState} from "react";
import {buildGetPosts} from "../utils";
import {PostType} from "../PostType";
import Header from "../components/Header/Header"
import heroImg from "../images/arch-hero.jpg"
import PostList from "../components/PostList";

type PropsType = {
  posts: PostType[]
};

const Home: NextPage<PropsType> = ({posts}) => {
  return (<div>
    <Header/>
    <div className="hero">
      <img
        src={heroImg.src}
        style={{width: "100%", height: 512, objectFit: "cover", filter: "brightness(0.5)"}}
        alt="Blog hero"
      />
      <div className="presentation">
        Je suis développeur web fullstack, pour mon métier je continue à m&apos;auto-former sur les
        nouvelles technologies.
        J&apos;ai décidé d&apos;ouvrir ce blog pour partager mes conseils/découvertes concernant le développement et les
        technologies que j&apos;utilise.
      </div>
    </div>
    <div className="content">
      <PostList posts={posts}/>
    </div>
  </div>);
};

export async function getStaticProps() {
  const posts = buildGetPosts();

  return {
    props: {posts},
  };
}

export default Home;
