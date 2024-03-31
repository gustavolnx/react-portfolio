import React from "react";


import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Fale comigo através dos canais ao lado!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp2.png")} alt="Whatsapp" />
          <a href="https://wa.me/15981339873">(15)98133-9873</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/gustavolnx/">linkedin.com/in/gustavolnx/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/gustavolnx/">github.com/gustavolnx/</a>
        </li>
      </ul>
    </footer>
  );
};
