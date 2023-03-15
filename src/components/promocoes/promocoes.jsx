import { CardProduto } from "../card-produto/card-produto.jsx";

import styles from "./promocoes.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import { useRef } from "react";
import { promocoes } from "./promocoes.js";
import { CarrosselProduto } from "../carrossel/carrossel-produto/carrossel-produto.jsx";
import { Marquee } from "../marquee/marquee.jsx";

export const Promocoes = () => {
  return (
    <div className={styles.promocoesCatalogo}>
      <Marquee />
      <div className={styles.carrosselPromocoes}>
        <div className="container">
          <CarrosselProduto produtos={promocoes} />
        </div>
      </div>
    </div>
  );
};
