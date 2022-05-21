import React, {useState} from "react";

import Hamburger from "../Hamburger/Hamburger";

import {Container} from "./Header.styled";

import logo from "../../images/geo logo.png";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/dist/client/router";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <Container>
      <div className="header">
        <h1>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              overflow: "hidden"
            }}
          >
            <img src={logo.src} alt="logo" style={{maxWidth: "150px"}}/>
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
                  onClick={() => router.push({pathname: "/search", query: {q: search}})}
                >
                  <i className="fas fa-search"/>
                </button>
              </div>
            </li>
            <li>
              <Link
                href="/search"
                className={router.pathname === "/search" ? "active" : ""}
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
    </Container>
  );
};

export default Header;
