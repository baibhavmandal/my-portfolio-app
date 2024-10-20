import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import {
  aboutSection,
  inner,
  skillsList,
  aboutImage,
  wrapper,
  img,
} from "./about.module.css";
import { numberedHeading } from "./layout.module.css";

const data = {
  value: "about",
  paragraphs: [
    {
      key: 1,
      para: "I am a software developer with a strong background in backend programming, skilled in creating efficient and scalable applications. I enjoy leveraging my problem-solving abilities to tackle technical challenges and develop creative solutions.",
    },
    {
      key: 2,
      para: "With expertise in JavaScript, Node.js, and database management systems like MongoDB and MySQL, I have worked on various full-stack projects. I am continuously learning new technologies and love collaborating with others to build robust software solutions.",
    },
    {
      key: 3,
      para: "Here are a few technologies and skills I’ve been working with recently:",
    },
  ],
  skills: [
    {
      key: 1,
      skill: "JavaScript (ES6+)",
    },
    {
      key: 2,
      skill: "C++",
    },
    {
      key: 3,
      skill: "Python",
    },
    {
      key: 4,
      skill: "React.js",
    },
    {
      key: 5,
      skill: "Node.js",
    },
    {
      key: 6,
      skill: "Express.js",
    },
    {
      key: 7,
      skill: "MongoDB & Mongoose",
    },
    {
      key: 8,
      skill: "MySQL & SQL",
    },
    {
      key: 9,
      skill: "Data Structures & Algorithms (Arrays, Trees, Graphs, Sorting)",
    },
    {
      key: 10,
      skill: "Backend Development",
    },
    {
      key: 11,
      skill: "Real-Time Communication",
    },
    {
      key: 12,
      skill: "Database Management",
    },
    {
      key: 13,
      skill: "Frontend Development",
    },
    {
      key: 14,
      skill: "Web Architecture & API Development",
    },
    {
      key: 15,
      skill: "Organizational & Attention to Detail",
    },
    {
      key: 16,
      skill: "Verbal Communication & Problem-Solving",
    },
  ],
};

const About = () => {
  return (
    <section id="about" className={aboutSection}>
      <h2 className={numberedHeading}>About Me</h2>
      <div className={inner}>
        <div>
          {data.paragraphs.map((paragraph) => {
            return <p key={paragraph.key}>{paragraph.para}</p>;
          })}
          <ul className={skillsList}>
            {data.skills.map((skill) => {
              return <li key={skill.key}>{skill.skill}</li>;
            })}
          </ul>
        </div>
        <AboutImage />
      </div>
    </section>
  );
};

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dp.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, placeholder: BLURRED, formats: AUTO)
        }
      }
    }
  `);

  // Extract the image
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <div className={aboutImage}>
      <div className={wrapper}>
        <GatsbyImage image={image} alt="me" className={img} />
      </div>
    </div>
  );
};

export default About;
