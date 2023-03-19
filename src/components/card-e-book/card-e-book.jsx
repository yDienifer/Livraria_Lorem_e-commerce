import React, { useEffect } from "react";
import styles from "./card-e-book.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export const CardEbook = ({
  imgCard,
  altImgCard,
  nomeDoEbook,
  categoriaDoEbook,
  descricaoDoEbook,
  precoPromocaoDoEbook,
  precoOriginalDoEbook,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);
  
  return (
    <div className={styles.cardEbookContainer} data-aos="fade-up">
      <div className={styles.card}>
        <img src={imgCard} alt={altImgCard} className={styles.imgCard} />
        <div className={`${styles.infoEbook} ${precoOriginalDoEbook ? "" : styles.semPromocao}`}>
          <h1 className={styles.nomeDoEbook}>{nomeDoEbook}</h1>
          <span className={styles.categoriaDoEbook}>{categoriaDoEbook}</span>
          <span className={styles.descricaoDoEbook}>{descricaoDoEbook}</span>
          <span className={styles.precoPromocaoDoEbook}>
            {precoPromocaoDoEbook}
          </span>
          <span className={styles.precoOriginalDoEbook}>
            {precoOriginalDoEbook}
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
