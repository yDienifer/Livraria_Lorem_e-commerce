import Marquee from "../marquee/marquee.jsx";
import { Promocoes } from "../promocoes/promocoes.jsx";

import styles from "./catalogo.module.scss";
import { Anuncio } from "./anuncio/anuncio.jsx";
import { LivrosTerror } from "./produtos.js";
import { CarrosselProduto } from "../carrossel/carrossel-produto/carrossel-produto.jsx";

function Catalogo() {
  return (
    <>
      <div className={styles.cardsContainer}>
        <Marquee />
        <Promocoes />
      </div>
      <div className="container">
        <CarrosselProduto
          tituloSecao="Aqui, o terror não tem fim!"
          produtos={LivrosTerror}
        />
        <Anuncio />
        <CarrosselProduto
          tituloSecao="O amor está entre as páginas!"
          produtos={LivrosTerror}
        />
        <CarrosselProduto
          tituloSecao="Mistérios à Espreita"
          produtos={LivrosTerror}
        />
      </div>
    </>
  );
}

export default Catalogo;
