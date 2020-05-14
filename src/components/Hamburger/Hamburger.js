import React from "react";
import PropTypes from "prop-types";

import "./Hamburger.scss";

function Hamburger({ active, onClick }) {
  return (
    <div className="hamburger-container" onClick={onClick}>
      <div className={`hamburger ${active ? "active" : ""}`} />
    </div>
  );
}

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
