import styles from "./catalogo.module.scss";

import { Promocoes } from "../promocoes/promocoes.jsx";

import { Anuncio } from "./anuncio/anuncio.jsx";

import {
  Lançamentos,
  LivrosMaisVendidos,
  LivrosRomance,
  LivrosSuspense,
  LivrosTerror,
} from "./e-books.js";

import { CarrosselEbook } from "../carrossel/carrossel-e-book/carrossel-e-book";

function Catalogo() {
  return (
    <>
      <div className={styles.cardsContainer}>
        <Promocoes />
      </div>
      <div className="container">
        <CarrosselEbook
          tituloSecao="Os livros mais vendidos do mês!"
          produtos={LivrosMaisVendidos}
        />
        <CarrosselEbook
          tituloSecao="Lançamentos imperdíveis do ano!"
          produtos={Lançamentos}
        />
        <Anuncio />
        <CarrosselEbook
          tituloSecao="Aqui, o terror não tem fim!"
          produtos={LivrosTerror}
        />
        <CarrosselEbook
          tituloSecao="O amor está entre as páginas!"
          produtos={LivrosRomance}
        />
        <CarrosselEbook
          tituloSecao="Mistérios à Espreita"
          produtos={LivrosSuspense}
        />
      </div>
    </>
  );
}

export default Catalogo;
