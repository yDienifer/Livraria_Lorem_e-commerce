import styles from "./banner-slider.module.scss";

import { TextoBanner } from "./texto-banner/texto-banner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function BannerSlider() {
  return (
    <div className={styles.banner}>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide className={styles.bannerContainer}>
          <img
            className={styles.imgBanner}
            src="static/img/banner/undraw_education_f8ru.svg"
            alt="the-sims4-vida-universitaria"
          />
          <TextoBanner
            className={styles.textoBanner}
            tituloBanner="A livraria preferida de escolas e faculdades!"
            descricaoPacote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            btnTexto="Conferir agora!"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.bannerContainer}>
          <img
            className={styles.imgBanner}
            src="static/img/banner/undraw_explore_re_8l4v.svg"
            alt="the-sims4-vida-universitaria"
          />
          <TextoBanner
            className={styles.textoBanner}
            tituloBanner="Qualidade e variedade: encontre seu e-book ideal!"
            descricaoPacote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            btnTexto="Explorar agora!"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.bannerContainer}>
          <img
            className={styles.imgBanner}
            src="static/img/banner/undraw_savings_re_eq4w.svg"
            alt="the-sims4-vida-universitaria"
          />
          <TextoBanner
            className={styles.textoBanner}
            tituloBanner="E-books incríveis, preços acessíveis: descubra agora!"
            descricaoPacote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            btnTexto="Ver promoções!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
