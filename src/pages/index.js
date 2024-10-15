import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import About from "../components/about";

import {
  fillHeight,
  mainContent,
  mainSection,
  bigHeading,
} from "./index.module.css";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div id="content">
        <main className={`${fillHeight} ${mainContent}`}>
          <section className={mainSection}>
            <div>
              <h1>{data.json.greeting}</h1>
            </div>
            <div>
              <h2 className={bigHeading}>{data.json.name}</h2>
            </div>
            <div>
              <h3 className={bigHeading}>{data.json.title}</h3>
            </div>
            <div>
              <p>{data.json.desc}</p>
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

export const query = graphql`
  query {
    json(id: { eq: "f2895b1a-c5f3-5fa2-badd-6e34bd43f041" }) {
      name
      title
      value
      desc
      greeting
    }
  }
`;
