import { ItensSidebar } from './sidebar';

import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.conta}>
                <img src="./static/img/icon_default.png" alt="conta" />
                <span>Não logado</span>
            </div>
            {ItensSidebar.map((item) => (
                <li><a href={item.link}>{item.titulo}</a></li>
            ))}
        </div>
    )
}

export default Sidebar;