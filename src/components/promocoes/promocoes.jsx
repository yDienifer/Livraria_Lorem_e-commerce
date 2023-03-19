import { CardEbook } from "../card-e-book/card-e-book";

import styles from "./promocoes.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import { useRef } from "react";
import { promocoes } from "./promocoes.js";
import { CarrosselEbook } from "../carrossel/carrossel-e-book/carrossel-e-book";
import { Marquee } from "../marquee/marquee.jsx";

export const Promocoes = () => {
  return (
    <div className={styles.promocoesCatalogo}>
      <Marquee />
      <div className={styles.carrosselPromocoes}>
        <div className="container">
          <CarrosselEbook produtos={promocoes} />
        </div>
      </div>
    </div>
  );
};
