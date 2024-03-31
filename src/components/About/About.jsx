import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className="titulo-sobre">Sobre</h2>
      <div className={styles.content}>
   
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                Sou um desenvolvedor Frontend com experiência em criação de sites responsivos e otimizados
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                Tenho conhecimento em desenvolvimento/consumo de API's e integração com banco de dados
              </p>
            </div>
          </li>
       
        </ul>
      </div>
    </section>
  );
};
