import styles from "./tipo-pacote-card.module.scss";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TipoDePacoteCard({
  nomeDoPacote,
  descricaoDoPacote,
  imgDoPacote,
  altImgPacote,
}) {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);

  return (
    <div className={styles.cardTiposDePacotes} data-aos="fade-up">
      <img
        className={styles.imgDoPacote}
        src={imgDoPacote}
        alt={altImgPacote}
      />
      <p className={styles.nomeDoPacote}>{nomeDoPacote}</p>
      <p className={styles.descricaoDoPacote}>{descricaoDoPacote}</p>
    </div>
  );
}
