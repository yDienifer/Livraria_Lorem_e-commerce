import React, { useEffect, useRef } from "react";

import { CardEbook } from "../../card-e-book/card-e-book";
import styles from "./carrossel-e-book.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export const CarrosselEbook = ({ tituloSecao, produtos }) => {
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
    <div className={styles.secaoDeLivros}>
      <h1 className={styles.tituloDaSecao} data-aos="fade-down">
        {tituloSecao}
      </h1>
      <div className={styles.elementosDoCarrossel}>
        <div className={styles.btns}>
          <div className={styles.containerBtnsMovimento}>
            <button onClick={btnVoltar} data-aos="fade-up">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button onClick={btnAvancar} data-aos="fade-up">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
          <button className={styles.btnVerTodos} data-aos="fade-up">Veja a lista completa</button>
        </div>
        <div className={styles.carrossel} ref={Carrossel}>
          <div className={styles.cardsContainer}>
            {produtos.map((produto) => (
              <div className={styles.card}>
                <CardEbook
                  key={produto.id}
                  imgCard={produto.imgCard}
                  altImgCard={produto.altImgCard}
                  nomeDoEbook={produto.nomeDoEbook}
                  categoriaDoEbook={produto.categoriaDoEbook}
                  descricaoDoEbook={produto.descricaoDoEbook}
                  precoPromocaoDoEbook={produto.precoPromocaoDoEbook}
                  precoOriginalDoEbook={produto.precoOriginalDoEbook}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
