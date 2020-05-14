import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "../components/Header/Header";
import SEO from "../components/seo";

function Search({ location }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (location.state) setSearch(location.state.q);
  }, [location]);
  return (
    <div>
      <SEO title="Blog" />
      <Header />
      search: {search}
    </div>
  );
}

Search.propTypes = {
  location: PropTypes.object,
};

export default Search;
