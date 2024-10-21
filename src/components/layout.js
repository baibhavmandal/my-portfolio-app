import * as React from "react";
import { Link } from "gatsby";

import "./layout.css";
import {
  layout,
  layoutHeader,
  layoutNav,
  logo,
  layoutNavBox,
  layoutNavMenu,
  resumeButton,
  layoutLeft,
  layoutRight,
  layoutLeftItem,
  layoutRightItem,
  menuButton,
  hamBox,
  hamBoxInner,
} from "./layout.module.css";

import Logo from "../images/logo.svg";
import GitHub from "../images/github.svg";
import Linkedln from "../images/linkedln.svg";
import Codepen from "../images/codepen.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <LayoutLeft />
      <LayoutRight />
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <header className={layoutHeader}>
      <nav className={layoutNav}>
        <div className={logo}>
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className={layoutNavBox}>
          <ol>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#Project">Project</Link>
            </li>
            <li>
              <Link to="#Contact">Contact</Link>
            </li>
          </ol>
          <div>
            <a
              className={resumeButton}
              href="https://drive.google.com/file/d/1kQC1lnl0Lkvqbcz-3VNL-eBSnhJuRXUx/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className={layoutNavMenu}>
          <button className={menuButton}>
            <div className={hamBox}>
              <div className={hamBoxInner}></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

const LayoutLeft = () => {
  return (
    <div orientation="left" className={layoutLeft}>
      <ul className={layoutLeftItem}>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Linkedln />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Codepen />
          </a>
        </li>
      </ul>
    </div>
  );
};

const LayoutRight = () => {
  return (
    <div orientation="right" className={layoutRight}>
      <div className={layoutRightItem}>
        <a href="mailto:baibhavmandal12@gmail.com">baibhavmandal12@gmail.com</a>
      </div>
    </div>
  );
};

export default Layout;
