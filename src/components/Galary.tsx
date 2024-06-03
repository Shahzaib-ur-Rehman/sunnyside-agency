import React from "react";
import bottlesMobile from "../../public/images/mobile/image-gallery-milkbottles.jpg";
import bottlesDesktop from "../../public/images/desktop/image-gallery-milkbottles.jpg";

import coneDesktop from "../../public/images/desktop/image-gallery-cone.jpg";
import coneMobile from "../../public/images/mobile/image-gallery-cone.jpg";

import orangeMobile from "../../public/images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../../public/images/desktop/image-gallery-orange.jpg";

import sugarDesktop from "../../public/images/desktop/image-gallery-sugarcubes.jpg";
import sugarMobile from "../../public/images/mobile/image-gallery-sugar-cubes.jpg";
import styles from './galary.module.css'
const Galary = () => {
  return (
    <section className={styles.galary}>
      <picture>
        <source srcSet={bottlesDesktop.src} media="(min-width:50rem)" />
        <img src={bottlesMobile.src} alt="" />
      </picture>
      <picture>
        <source srcSet={orangeDesktop.src} media="(min-width:50rem)" />
        <img src={orangeMobile.src} alt="" />
      </picture>
      <picture>
        <source srcSet={coneDesktop.src} media="(min-width:50rem)" />
        <img src={coneMobile.src} alt="" />
      </picture>
      <picture>
        <source srcSet={sugarDesktop.src} media="(min-width:50rem)" />
        <img src={sugarMobile.src} alt="" />
      </picture>
    </section>
  );
};

export default Galary;
