import styles from "./navbar.module.scss";

import Hamburguer from "./nav-mobile/menu-hamburguer/menu-hamburguer";
import { LogoLivraria } from "./logo-livraria/logo-livraria";
import { Pesquisa } from "./pesquisa/pesquisa";
import { BtnsConta } from "./conta/btns-conta";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NossasFiliais, Contatos } from "./menu/menu";

export default function Navbar({ valorDoFiltro, setValorDoFiltro }) {
  const [mostrarDropdownFiliais, setDropdownFiliais] = useState(false);
  const [mostrarDropdownContatos, setDropdownContatos] = useState(false);

  const iconeMenuFechado = <ion-icon name="chevron-down-outline"></ion-icon>;

  const iconeMenuAberto = <ion-icon name="chevron-up-outline"></ion-icon>;

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    display: scrollPosition > 100 ? "none" : "block",
    marginTop: 10,
    "@media (max-width: 768px)": {
      display: "none",
    },
  };

  return (
    <header>
      <div className={styles.navMobile}>
        <Hamburguer />
      </div>
      <div className={styles.funcionalidades}>
        <LogoLivraria />
        <Pesquisa
          className={styles.pesquisa}
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <BtnsConta />
      </div>
      <nav style={navStyle}>
        <ul className={styles.menu}>
          <li>
            <Link to="/noticias-e-atualizacoes">Início</Link>
          </li>
          <li>
            <Link to="/noticias-e-atualizacoes">Quem somos</Link>
          </li>
          <li>
            <Link to="/noticias-e-atualizacoes">Promoções</Link>
          </li>
          <li>
            <Link to="/tituloIntrodutorio">Categorias</Link>
          </li>
          <span>
            <Link
              to="/filiais"
              onClick={() => setDropdownFiliais(!mostrarDropdownFiliais)}
            >
              Nossas filiais
            </Link>
            {mostrarDropdownFiliais ? iconeMenuAberto : iconeMenuFechado}
            {mostrarDropdownFiliais && (
              <ul className={styles.dropdown}>
                {NossasFiliais.map((filiais) => (
                  <li key={filiais.id}>
                    <a href={filiais.link}>{filiais.titulo}</a>
                  </li>
                ))}
              </ul>
            )}
          </span>
          <span>
            <Link
              to="/contatos"
              onClick={() => setDropdownContatos(!mostrarDropdownContatos)}
            >
              Contatos
            </Link>
            {mostrarDropdownContatos ? iconeMenuAberto : iconeMenuFechado}
            {mostrarDropdownContatos && (
              <ul className={styles.dropdown}>
                {Contatos.map((contato) => (
                  <li key={contato.id}>
                    <a href={contato.link}>{contato.titulo}</a>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </ul>
      </nav>
    </header>
  );
}