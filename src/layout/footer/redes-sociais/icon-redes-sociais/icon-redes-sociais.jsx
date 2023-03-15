import React from "react";

import styles from ".//icon-redes-sociais.module.scss";

export const IconRedesSociais = ({ Icons }) => {
  return (
    <div className={styles.iconRedesSociaisContainer}>
      {Icons.map((icon) => (
        <ion-icon name={icon.name} key={icon.id}></ion-icon>
      ))}
    </div>
  );
};