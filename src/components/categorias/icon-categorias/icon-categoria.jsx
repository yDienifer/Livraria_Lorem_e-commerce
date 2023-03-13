import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./icon-categoria.module.scss";

export const IconCategoria = ({
  TituloDaCategoria,
  ImgDaCategoria,
  AltImg,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1950 });
  }, []);

  return (
    <div className={styles.iconCategoriaContainer} data-aos="fade-up">
      <img
        className={styles.imgDaCategoria}
        src={ImgDaCategoria}
        alt={AltImg}
      />
      <p className={styles.tituloDaCategoria}>{TituloDaCategoria}</p>
    </div>
  );
};
