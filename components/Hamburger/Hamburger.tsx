import React from "react";

import {Container} from "./Hamburger.styled";

type PropTypes = {
  active: boolean;
  onClick: () => any
}

const Hamburger: React.FC<PropTypes> = ({active, onClick}) => {
  return (
    <Container onClick={onClick}>
      <div className={`hamburger ${active ? "active" : ""}`}/>
    </Container>
  );
}

export default Hamburger;
