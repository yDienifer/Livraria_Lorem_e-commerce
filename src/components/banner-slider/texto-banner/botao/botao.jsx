import styles from "./botao.module.scss";

export const Botao = ({ textoBtn }) => {
  return (
    <>
      <p className={styles.btnBaixar}>{textoBtn}</p>
    </>
  );
};
