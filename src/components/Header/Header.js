import React, { useState } from "react";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import Hamburger from "../Hamburger/Hamburger";

import "./Header.scss";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [search, setSearch] = useState("");
  const data = useStaticQuery(graphql`
    query siteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header
      style={{
        background: "rebeccapurple",
      }}
    >
      <div className="header">
        <h1>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <nav className={`nav ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <div className="input">
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  name="search-input"
                />
                <button
                  onClick={() => navigate("/search", { state: { q: search } })}
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </li>
            <li>
              <Link
                to="/search"
                className={
                  window.location.pathname === "/search" ? "active" : ""
                }
              >
                Recherche avancée
              </Link>
            </li>
            <li>
              <a
                href="https://geoffreydouilly.fr"
                title="Portfolio Geoffrey Douilly"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
        <Hamburger
          active={navActive}
          onClick={() => setNavActive(old => !old)}
        />
      </div>
    </header>
  );
};

export default Header;
