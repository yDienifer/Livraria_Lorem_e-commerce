import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IconCategoria } from "./icon-categorias/icon-categoria";
import styles from "./categorias.module.scss";

import { categorias } from "./categorias.js";

export default function Categorias() {
  const Carrossel = useRef(null);

  const btnVoltar = (e) => {
    e.preventDefault();
    Carrossel.current.scrollLeft -= Carrossel.current.offsetWidth;
  };

  const btnAvancar = (e) => {
    e.preventDefault();
    Carrossel.current.scrollLeft += Carrossel.current.offsetWidth;
  };

  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);

  return (
    <div className="container">
      <div className={styles.categoriasContainer}>
        <h1 className={styles.tituloDaSecao} data-aos="fade-down">
          Compre por categoria
        </h1>
        <div className={styles.btns}>
          <div>
            <button onClick={btnVoltar} data-aos="fade-up">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button onClick={btnAvancar} data-aos="fade-up">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div className={styles.carrossel} ref={Carrossel}>
          <div className={styles.icons}>
            {categorias.map((card) => (
              <IconCategoria
                key={card.id}
                TituloDaCategoria={card.TituloDaCategoria}
                ImgDaCategoria={card.ImgDaCategoria}
                AltImg={card.AltImg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
