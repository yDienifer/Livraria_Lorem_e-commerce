import styles from "./tipo-pacote-card.module.scss";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TipoDePacoteCard({ nomeDoPacote, descricaoDoPacote }) {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);

  return (
    <div className={styles.cardTiposDePacotes} data-aos="fade-up">
      <p className={styles.nomeDoPacote}>{nomeDoPacote}</p>
      <p className={styles.descricaoDoPacote}>{descricaoDoPacote}</p>
    </div>
  );
}
