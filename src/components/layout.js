import * as React from "react";
import { Link } from "gatsby";

import "./layout.css";
import {
  layout,
  layoutHeader,
  layoutNav,
  logo,
  layoutNavBox,
  resumeButton,
  layoutLeft,
  layoutRight,
  layoutLeftItem,
  layoutRightItem,
} from "./layout.module.css";
import Logo from "../images/logo.svg";
import GitHub from "../images/github.svg";
import Linkedln from "../images/linkedln.svg";
import Codepen from "../images/codepen.svg";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
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
              <a className={resumeButton} href="./" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div orientation="left" className={layoutLeft}>
        <ul className={layoutLeftItem}>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <GitHub />
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
      <div orientation="right" className={layoutRight}>
        <div className={layoutRightItem}>
          <a href="mailto:baibhavmandal12@gmail.com">
            baibhavmandal12@gmail.com
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
