import styles from "./banner-mobile.module.scss";

import { TextoBannerMobile } from "./texto-banner-mobile/texto-banner-mobile.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

export default function BannerMobile() {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop={true}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className={styles.bannerContainer}>
            <img
              className={styles.imgBanner}
              src="static/img/banner/undraw_education_f8ru.svg"
              alt="the-sims4-vida-sustentavel"
            />
            <TextoBannerMobile
              imgLogoPacote="static/img/logos/ts4-vida-sustentavel.png"
              altImgLogoPacote="the-sims4-vida-sustentavel"
              descricaoPacote="Reduza, reutilize e recicle! Produza sua própria eletricidade e água com painéis solares, turbinas de vento e coletores 
                            de orvalho, ou cultive sua própria comida em um novo jardim vertical, para controlar seu impacto no mundo. Extremistas também podem vasculhar a lixeira para encontrar petiscos de insetos ou componentes para uma nova criação. Alguns dos itens que você coleta podem até ser usados para criar produtos como sucos borbulhantes e velas para atender pedidos online."
              textoBtn="Compre agora!"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.bannerContainer}>
            <img
              className={styles.imgBanner}
              src="./static/img/banner/banner-mobile/TS4_vampires.jpeg"
              alt="the-sims4-estacoes"
            />
            <TextoBannerMobile
              imgLogoPacote="./static/img/logos/TS4-vampiros_logo.png"
              altImgLogoPacote="the-sims-4-lobisims"
              descricaoPacote="Crie Sims vampiros atraentes ou assustadores. Escolha as presas, adicione olhos brilhantes e personalize uma Forma da 
                            Escuridão para se transformar quando estiver furioso ou quiser assustar outros Sims."
              textoBtn="Compre agora!"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.bannerContainer}>
            <img
              className={styles.imgBanner}
              src="./static/img/banner/banner-mobile/TS4_high_school_years.jpeg"
              alt="the-sims4-vida-universitaria"
            />
            <TextoBannerMobile
              imgLogoPacote="static/img/logos/ts4-vida-universitaria.png"
              altImgLogoPacote="the-sims-4-lobisims"
              descricaoPacote="Bem-vindos a Britechester! Comece um novo capítulo para seu Sim na histórica Universidade de 
                    Britechester ou no moderno Instituto Foxbury. More em um alojamento estudantil ou fora do campus, explore Britechester
                    de bicicleta, passe o tempo nas áreas de convivência dos alunos e faça uma sessão de estudo na biblioteca. Torça pelo 
                    corpo estudantil em um evento de espírito escolar e vista as cores da faculdade para mostrar o orgulho do seu Sim."
              textoBtn="Compre agora!"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
