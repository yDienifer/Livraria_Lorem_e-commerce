import React from "react";

import styles from './/icon-redes-sociais.module.scss';

const IconRedesSociais = ({ Icons }) => {
  return (
    <div className={styles.iconRedesSociaisContainer}>
      {Icons.map((icon) => (
          <ion-icon name={icon.name} key={icon.id}></ion-icon>
      ))}
    </div>
  );
};

export default IconRedesSociais;