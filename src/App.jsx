import Catalogo from "./components/catalogo/catalogo.jsx";
import Categorias from "./components/categorias/categorias.jsx";
import Footer from "./layout/footer/footer.jsx";
import BannerSlider from "./components/banner-slider/banner-slider";
import BannerMobile from "./components/banner-slider/banner-mobile/banner-mobile";
import Pacotes from "./components/pacotes/pacotes.jsx";

import styles from "./App.module.scss";
import Navbar from "./layout/navbar/navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <main className={styles.conteudo}>
        <BannerSlider />
        <BannerMobile />
        <Categorias />
        <Catalogo />
        <Pacotes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
