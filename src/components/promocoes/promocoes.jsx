import { CardProduto } from "../card-produto/card-produto.jsx";

import styles from "./promocoes.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import { useRef } from "react";
import { promocoes } from "./promocoes.js";

export const Promocoes = () => {
  const Carrossel = useRef(null);

  const btnVoltar = (e) => {
    // e = Evento
    e.preventDefault(); // Previne um comportamento padrão
    Carrossel.current.scrollLeft -= Carrossel.current.offsetWidth;
  };

  const btnAvancar = (e) => {
    e.preventDefault();
    Carrossel.current.scrollLeft += Carrossel.current.offsetWidth;
  };

  return (
    <div className={styles.promocoesCatalogo}>
      <div className="container">
        <div className={styles.btns}>
          <button onClick={btnVoltar}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <button onClick={btnAvancar}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
        <div className={styles.carrossel} ref={Carrossel}>
          <div className={styles.cardsContainer}>
            {promocoes.map((produto) => (
              <div className={styles.card}>
                <CardProduto
                  key={produto.id}
                  imgCard={produto.imgCard}
                  altImgCard={produto.altImgCard}
                  nomeDoProduto={produto.nomeDoProduto}
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
