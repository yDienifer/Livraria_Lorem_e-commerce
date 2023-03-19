import React, { useEffect } from "react";
import styles from "./card-produto.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export const CardProduto = ({
  imgCard,
  altImgCard,
  nomeDoProduto,
  categoriaDoEbook,
  descricaoDoProduto,
  precoPromocaoDoProduto,
  precoOriginalDoProduto,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);
  
  return (
    <div className={styles.cardProdutoContainer} data-aos="fade-up">
      <div className={styles.card}>
        <img src={imgCard} alt={altImgCard} className={styles.imgCard} />
        <div className={`${styles.infoProduto} ${precoOriginalDoProduto ? "" : styles.semPromocao}`}>
          <h1 className={styles.nomeDoProduto}>{nomeDoProduto}</h1>
          <span className={styles.categoriaDoEbook}>{categoriaDoEbook}</span>
          <span className={styles.descricaoDoProduto}>{descricaoDoProduto}</span>
          <span className={styles.precoPromocaoDoProduto}>
            {precoPromocaoDoProduto}
          </span>
          <span className={styles.precoOriginalDoProduto}>
            {precoOriginalDoProduto}
          </span>
          <div className={styles.compraOuFav}>
            <ion-icon name="cart-outline" alt="Favoritar"></ion-icon>
            <ion-icon
              name="heart-outline"
              alt="Adicionar ao carrinho"
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};
