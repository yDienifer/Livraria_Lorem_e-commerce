import { Link } from "react-router-dom";

import { ItensSidebar } from "./sidebar";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.conta}>
        <img src="static/img/profile/profile.svg" alt="conta" />
        <div className={styles.informacoesSobreAConta}>
          <span>Não logado</span>
          <span>
            <Link to="/">Entrar agora</Link>
          </span>
        </div>
      </div>
      {ItensSidebar.map((item) => (
        <div className={styles.atalhos}>
          <li>
            <a href={item.link}>{item.titulo}</a>
          </li>
        </div>
      ))}
    </div>
  );
};
