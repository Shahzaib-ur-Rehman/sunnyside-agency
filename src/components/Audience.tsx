import React from "react";
import styles from "./audience.module.css";
import Image from "next/image";
import standOutDesktop from "../../public/images/desktop/image-stand-out.jpg";
import standOutMobile from "../../public/images/mobile/image-stand-out.jpg";
import { fraunces } from "@/utils/HeadingsFont";

const Audience = () => {
  return (
    <section className={styles.audience}>
      <picture>
        <source srcSet={standOutDesktop.src} media="(min-width:50rem)" />
        <img src={standOutMobile.src} alt="" />
      </picture>
      <div className={styles.content}>
        <h2 className={`${fraunces.className} secondary-heading`}>
          {" "}
          Stand out to the right audience
        </h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a href="" className={styles.learnBtn}>Learn more</a>
      </div>
    </section>
  );
};

export default Audience;
