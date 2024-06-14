import * as React from "react";
import { Link } from "gatsby";

import "./layout.css";
import {
  layout,
  layoutHeader,
  layoutNav,
  layoutNavBox,
  resumeButton,
} from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <header className={layoutHeader}>
        <nav className={layoutNav}>
          <div>Logo</div>
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
      {children}
    </div>
  );
};

export default Layout;
