import { Botao } from "./botao/botao.jsx";
import styles from "./texto-banner.module.scss";

export const TextoBanner = ({
  tituloBanner,
  descricaoPacote,
  btnTexto,
}) => {
  return (
    <div className={styles.textoBannerContainer}>
        <h1>{tituloBanner}</h1>
        <p className={styles.descricaoPacote}>{descricaoPacote}</p>
        <Botao textoBtn={btnTexto} />
    </div>
  );
};