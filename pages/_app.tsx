import type {AppProps} from "next/app";
import styled from "styled-components";

import React from "react";
import Head from "next/head";
import "../styles/style.scss";

const PageContainer = styled.div`
  min-width: 100%;

  &, * {
    box-sizing: border-box;
  }
`;

function MyApp({Component, pageProps}: AppProps) {
  return (
    <PageContainer>
      <Head>
        <title>Portfolio Geoffrey Douilly</title>
        <meta
          name="description"
          content="Je m'appelle Geoffrey Douilly, je suis développeur web fullstack, voici le blog sur lequel je posterai mes découvertes en développement/technologies"
        />
      </Head>
      <Component {...pageProps} />
    </PageContainer>
  );
}

export default MyApp;
