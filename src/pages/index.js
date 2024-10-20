import * as React from "react";

import Layout from "../components/layout";
import About from "../components/about";

import {
  fillHeight,
  mainContent,
  mainSection,
  bigHeading,
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
        </main>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Baibhav Mandal</title>;
