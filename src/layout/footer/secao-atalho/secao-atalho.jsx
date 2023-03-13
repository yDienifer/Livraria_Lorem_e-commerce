import styles from "./secao-atalho.module.scss";

export const SecaoAtalho = ({ tituloSecao, listas, nomeDoIcon }) => {
  return (
    <div className={styles.secaoAtalhoContainer}>
      <span>{tituloSecao}</span>
      <div className={styles.listaContainer}>
        {listas.map((lista) => (
          <li key={lista.id}>
            <a href={lista.link}>
              <ion-icon name={lista.nomeDoIcon}></ion-icon>
              {lista.titulo}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};
