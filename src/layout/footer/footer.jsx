import styles from "./footer.module.scss";

import { IconRedesSociais } from ".//redes-sociais/icon-redes-sociais/icon-redes-sociais.jsx";
import { Icons } from "./menus/menus";
import { Novidades } from "./novidades/novidades";
import { atalhos } from "./atalhos/atalhos.js";
import { SecaoAtalho } from "./secao-atalho/secao-atalho";

import { Contato, Sobre } from "./lista-secoes/lista";

function Footer() {
  return (
    <footer>
      <div className={styles.linha1}>
        <div className={styles.secoesAtalhos}>
          <div className={styles.secaoContatos}>
            <SecaoAtalho tituloSecao="Contatos" listas={Contato} />
          </div>
          <div className={styles.secaoSobre}>
            <SecaoAtalho tituloSecao="Sobre a livraria" listas={Sobre} />
          </div>
        </div>
        <div className={styles.novidadesContainer}>
          <Novidades />
        </div>
      </div>
      <img
        src="static/img/footer/undraw_book_reading_re_fu2c.svg"
        alt=""
        className={styles.pngSim}
      />
      <div className={styles.atalhosContainer}>
        <ul className={styles.atalho}>
          {atalhos.map((atalho) => (
            <li key={atalho.id}>
              <a href={atalho.linkAtalho}>{atalho.nomeAtalho}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.redesSociais}>
        <IconRedesSociais Icons={Icons} />
      </div>
      <div className={styles.direitosAutorais}>
        <p>Copyright © 2023 Livraria Lorem. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
