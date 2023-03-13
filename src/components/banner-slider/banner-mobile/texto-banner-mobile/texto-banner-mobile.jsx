import styles from "./texto-banner-mobile.module.scss";

export const TextoBannerMobile = ({
  imgLogoPacote,
  altImgLogoPacote,
  descricaoPacote,
  textoBtn,
}) => {
  return (
    <div className={styles.textoBannerContainer}>
      <img
        className={styles.logoPacote}
        src={imgLogoPacote}
        alt={altImgLogoPacote}
      />
      <p className={styles.descricaoPacote}>{descricaoPacote}</p>
      <p className={styles.btnBaixar}>{textoBtn}</p>
    </div>
  );
};
