import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
    </div>
  );
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;
