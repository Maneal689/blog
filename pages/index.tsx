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
  console.log("posts: ", posts);
  return (<div>
    <Header/>
    <div className="hero">
      <img
        src={heroImg.src}
        style={{width: "100%", height: 512, objectFit: "cover", filter: "brightness(0.5)"}}
        alt="Blog hero"
      />
      <div className="presentation">
        Je suis étudiant en L3 Informatique, j'ai d'abord appris à développer en autodidacte et je continue encore à
        m'auto-former sur les technologies de mon choix. J'ai décidé d'ouvrir ce blog pour partager mes
        conseils/découvertes concernant le développement, les technologies que j'utilise.
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
