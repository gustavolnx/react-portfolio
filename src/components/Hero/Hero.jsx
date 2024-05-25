import React from "react";
import foto from "./foto.png";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Gustavo!</h1>
        <p className={styles.description}>
         Sou um desenvolvedor Fullstack. 
         <br></br>
         Iniciei a carreira de TI em 2015, como Desenvolvedor atuo desde 2021, 
        atualmente tenho conhecimento geral das tecnologias disponíveis 
        no mercado de desenvolvimento.
        <br>
        </br>Tento me manter atualizado 
        sempre estudando as novas tendências.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Entre em contato
        </a>
      </div>
      <img
        src={foto}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
