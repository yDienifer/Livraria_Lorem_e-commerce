import styles from "./logo-livraria.module.scss";

import { Link } from "react-router-dom";

export const LogoLivraria = () => {
  const toggleHome = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.logo} onClick={toggleHome}>
      <Link to="/">
        <img
          className={styles.logo}
          src="static/img/favicon/favicon.ico"
          alt="logo-the-sims"
        />
        <span>Livraria Lorem</span>
      </Link>
    </div>
  );
};

export const LogoLivrariaSemLink = () => {
  return (
    <div className={styles.logoSemLink}>
      <img
        className={styles.imgLogoSemLink}
        src="static/img/favicon/favicon.ico"
        alt="logo-the-sims"
      />
      <span>Livraria Lorem</span>
    </div>
  );
};
