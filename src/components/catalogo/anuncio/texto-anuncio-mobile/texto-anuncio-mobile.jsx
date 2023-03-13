import styles from "./texto-anuncio-mobile.module.scss";

import { Botao } from "../../../banner-slider/texto-banner/botao/botao";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export const TextoAnuncioMobile = ({
  tituloAnuncio,
  descricaoJogoAnuncio,
  btnTexto,
}) => {

  useEffect(() => {
    AOS.init({ duration: 1940 });
  }, []);

  return (
    <div className={styles.textoAnuncioMobileContainer} data-aos="fade-up">
      <div className={styles.conteudoAnuncioMobile}>
        <h1>{tituloAnuncio}</h1>
        <p className={styles.descricaoJogoAnuncioMobile}>{descricaoJogoAnuncio}</p>
        <Botao textoBtn={btnTexto} />
      </div>
    </div>
  );
};
