import * as React from "react";

import { aboutSection, inner, skillsList } from "./about.module.css";
import { numberedHeading } from "./layout.module.css";

const About = () => {
  return (
    <section id="about" className={aboutSection}>
      <h2 className={numberedHeading}>About Me</h2>
      <div className={inner}>
        <div>Paragraph</div>
        <ul className={skillsList}></ul>
      </div>
    </section>
  );
};

export default About;
