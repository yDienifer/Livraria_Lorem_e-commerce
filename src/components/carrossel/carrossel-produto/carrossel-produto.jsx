import React, { useEffect, useRef } from "react";

import { CardProduto } from "../../card-produto/card-produto";
import styles from "./carrossel-produto.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export const CarrosselProduto = ({ tituloSecao, produtos }) => {
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
            <button onClick={btnVoltar}>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button onClick={btnAvancar}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
          <button className={styles.btnVerTodos}>Veja a lista completa</button>
        </div>
        <div className={styles.carrossel} ref={Carrossel}>
          <div className={styles.cardsContainer}>
            {produtos.map((produto) => (
              <div className={styles.card}>
                <CardProduto
                  key={produto.id}
                  imgCard={produto.imgCard}
                  altImgCard={produto.altImgCard}
                  nomeDoProduto={produto.nomeDoProduto}
                  categoriaDoEbook={produto.categoriaDoEbook}
                  descricaoDoProduto={produto.descricaoDoProduto}
                  precoPromocaoDoProduto={produto.precoPromocaoDoProduto}
                  precoOriginalDoProduto={produto.precoOriginalDoProduto}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
