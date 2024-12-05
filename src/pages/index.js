import * as React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import Contact from "../components/contact";

import Star from "../images/star.svg";
import Feather from "../images/feather.svg";
import Github from "../images/github.svg";
import Linkedln from "../images/linkedln.svg";
import Codepen from "../images/codepen.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

import {
  fillHeight,
  mainContent,
  mainSection,
  bigHeading,
  footer,
  footerAuthor,
  githubStats,
  footerContact,
} from "./index.module.css";

const data = {
  value: "introduction",
  greeting: "Hi, my name is",
  name: "Baibhav Mandal",
  title: "I build things for the web.",
  description:
    "I am Baibhav Mandal, a passionate and detail-oriented software developer with a solid foundation in backend development, especially using JavaScript (Node.js). I thrive on solving complex problems and building scalable, efficient applications. With hands-on experience in real-time communication systems, database management, and API development, I am eager to contribute to innovative projects that push the boundaries of technology.",
};

const IndexPage = () => {
  return (
    <Layout>
      <div id="content">
        <main className={`${fillHeight} ${mainContent}`}>
          <section className={mainSection}>
            <div>
              <h1>{data.greeting}</h1>
            </div>
            <div>
              <h2 className={bigHeading}>{data.name}</h2>
            </div>
            <div>
              <h3 className={bigHeading}>{data.title}</h3>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
          </section>
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerContact}>
        <ul>
          <li>
            <a href="https://github.com/baibhavmandal" rel="" target="__blank">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://github.com" rel="" target="__blank">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://github.com" rel="" target="__blank">
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/baibhavmandal/"
              rel=""
              target="__blank"
            >
              <Linkedln />
            </a>
          </li>
          <li>
            <a href="https://github.com" rel="" target="__blank">
              <Codepen />
            </a>
          </li>
        </ul>
      </div>
      <div className={footerAuthor}>
        <a
          href="https://www.google.com"
          rel="noopener noreferrer"
          target="__blank"
        >
          <div>Built By Baibhav Mandal</div>
          <div className={githubStats}>
            <span>
              <Star />
              <span>0</span>
            </span>
            <span>
              <Feather />
              <span>0</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default IndexPage;

export const Head = () => <title>Baibhav Mandal</title>;
