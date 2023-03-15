import styles from "./menu-hamburguer.module.scss";

import { useState } from "react";
import { Sidebar } from "../sidebar/sidebar.jsx";

const MenuHamburguer = () => {
  const [open, setOpen] = useState(false);

  const iconeAberto = (
    <div className={styles.abrirMenu} onClick={() => setOpen(!open)}>
      <div className={styles.barra}></div>
      <div className={styles.barra}></div>
      <div className={styles.barra}></div>
    </div>
  );

  const iconeFechado = (
    <div className={styles.fecharSidebar} onClick={() => setOpen(!open)}>
      <div className={styles.barra}></div>
      <div className={styles.barra}></div>
    </div>
  );

  return (
    <nav className={styles.menuHamburguerContainer}>
      <div className={styles.sideBarContainer}>{open && <Sidebar />}</div>
      {open ? iconeFechado : iconeAberto}
    </nav>
  );
};

export default MenuHamburguer;
