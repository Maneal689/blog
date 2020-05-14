import React from "react";
import PropTypes from "prop-types";

import Header from "../components/Header/Header";
import SEO from "../components/seo";

function Search({ location }) {
  return (
    <div>
      <SEO title="Blog" />
      <Header />
      search: {location.state.q}
    </div>
  );
}

Search.propTypes = {
  location: PropTypes.object,
};

export default Search;
