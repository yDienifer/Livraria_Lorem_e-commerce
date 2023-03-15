import styles from "./texto-anuncio.module.scss";

import { Botao } from "../../../banner-slider/texto-banner/botao/botao";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export const TextoAnuncio = ({
  tituloAnuncio,
  descricaoJogoAnuncio,
  btnTexto,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1940 });
  }, []);

  return (
    <div className={styles.textoAnuncioContainer} data-aos="fade-up">
      <div className={styles.conteudoAnuncio}>
        <h1>{tituloAnuncio}</h1>
        <p className={styles.descricaoJogoAnuncio}>{descricaoJogoAnuncio}</p>
        <Botao textoBtn={btnTexto} />
      </div>
    </div>
  );
};
