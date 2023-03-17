import styles from "./catalogo.module.scss";

import { Promocoes } from "../promocoes/promocoes.jsx";

import { Anuncio } from "./anuncio/anuncio.jsx";

import {
  Lançamentos,
  LivrosMaisVendidos,
  LivrosRomance,
  LivrosSuspense,
  LivrosTerror,
} from "./produtos.js";

import { CarrosselProduto } from "../carrossel/carrossel-produto/carrossel-produto.jsx";

function Catalogo() {
  return (
    <>
      <div className={styles.cardsContainer}>
        <Promocoes />
      </div>
      <div className="container">
        <CarrosselProduto
          tituloSecao="Os livros mais vendidos do mês!"
          produtos={LivrosMaisVendidos}
        />
        <CarrosselProduto
          tituloSecao="Lançamentos imperdíveis do ano!"
          produtos={Lançamentos}
        />
        <Anuncio />
        <CarrosselProduto
          tituloSecao="Aqui, o terror não tem fim!"
          produtos={LivrosTerror}
        />
        <CarrosselProduto
          tituloSecao="O amor está entre as páginas!"
          produtos={LivrosRomance}
        />
        <CarrosselProduto
          tituloSecao="Mistérios à Espreita"
          produtos={LivrosSuspense}
        />
      </div>
    </>
  );
}

export default Catalogo;
