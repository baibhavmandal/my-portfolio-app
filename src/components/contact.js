import React from "react";

import {
  contactSection,
  numberedHeading,
  overline,
  title,
  emailLink,
} from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={contactSection}>
      <h2 className={`${numberedHeading} ${overline}`}>What's Next</h2>
      <h2 className={title}>Get In Touch</h2>
      <p>
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <a
        className={emailLink}
        href="mailto:baibhavmandal1@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
