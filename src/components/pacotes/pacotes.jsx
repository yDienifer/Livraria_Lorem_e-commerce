import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TipoDePacoteCard from "./tipos-pacotes/tipo-pacote-card";

import styles from "./pacotes.module.scss";
import { TiposDePacotes } from "./pacotes.js";

export default function Pacotes() {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);

  return (
    <div className="container">
      <div className={styles.pacotesContainer}>
        <h1 className={styles.tituloPacoteIntro} data-aos="fade-down">
          Pacotes de Livros Imperdíveis para os Amantes da Leitura!
        </h1>
        <div className={styles.cardsContainer}>
          {TiposDePacotes.map((pacote) => (
            <div className={styles.card}>
              <TipoDePacoteCard
                key={pacote.id}
                imgDoPacote={pacote.imgDoPacote}
                altImgPacote={pacote.altImgPacote}
                nomeDoPacote={pacote.nomeDoPacote}
                descricaoDoPacote={pacote.descricaoDoPacote}
                precoPromocaoDopacote={pacote.precoPromocaoDopacote}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
