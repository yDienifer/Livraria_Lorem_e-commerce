import { ItensSidebar } from "./sidebar";

import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.conta}>
        <img src="static/img/profile/profile.svg" alt="conta" />
        <span>Não logado</span>
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

export default Sidebar;
