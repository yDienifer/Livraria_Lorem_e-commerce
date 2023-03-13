import styles from "./pesquisa.module.scss";

export const Pesquisa = ({ valorDoFiltro, setValorDoFiltro }) => {
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;

  return (
    <div className={styles.pesquisaContainer}>
      <input
        type="text"
        onChange={(e) => setValorDaBusca(e.target.value)}
        value={valorDaBusca}
        placeholder="Pesquise um livro..."
      />
      <button><ion-icon name="search-outline"></ion-icon></button>
    </div>
  );
};
