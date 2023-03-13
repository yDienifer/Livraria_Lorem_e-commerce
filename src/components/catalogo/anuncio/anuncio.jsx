import { useEffect } from "react";

import styles from "./anuncio.module.scss";
import { TextoAnuncio } from "./texto-anuncio/texto-anuncio";

import AOS from "aos";
import "aos/dist/aos.css";
import { TextoAnuncioMobile } from "./texto-anuncio-mobile/texto-anuncio-mobile";

export const Anuncio = ({ bannerJogoAnuncio, altBannerJogoAnuncio }) => {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);

  return (
    <div className={styles.anuncio} data-aos="fade-right">
      <img
        className={styles.bannerAnuncio}
        src="static/img/advertising/receitas.jpg"
        alt="The Sims 4 A Aventura De Crescer"
      />
      <div className={styles.conteudoAnuncio}>
        <TextoAnuncio
          tituloAnuncio="Livros de dar àgua na boca!"
          descricaoJogoAnuncio="Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
         ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum."
          btnTexto="Ver livros!"
        />
        <TextoAnuncioMobile
          tituloAnuncio="Livros de dar àgua na boca!"
          descricaoJogoAnuncio="Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
         ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum."
          btnTexto="Ver livros!"
        />
      </div>
    </div>
  );
};
