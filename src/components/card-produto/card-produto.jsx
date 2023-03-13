import React, { useEffect } from "react";

import styles from "./card-produto.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export const CardProduto = ({
  imgCard,
  altImgCard,
  nomeDoProduto,
  descricaoDoProduto,
  precoPromocaoDoProduto,
  precoOriginalDoProduto,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);

  return (
    <div className={styles.cardProduto} data-aos="fade-up">
      <img src={imgCard} alt={altImgCard} className={styles.imgCard} />
      <div className={styles.infoProduto}>
          <h1 className={styles.nomeDoProduto}>
            {nomeDoProduto}
          </h1>
          <p className={styles.descricaoDoProduto}>
            {descricaoDoProduto}
          </p>
          <p className={styles.precoPromocaoDoProduto}>
            {precoPromocaoDoProduto}
          </p>
          <p className={styles.precoOriginalDoProduto}>
            {precoOriginalDoProduto}
          </p>
        <div className={styles.compraOuFav}>
          <ion-icon name="cart-outline" alt="Favoritar"></ion-icon>
          <ion-icon name="heart-outline" alt="Adicionar ao carrinho"></ion-icon>
        </div>
      </div>
    </div>
  );
}
