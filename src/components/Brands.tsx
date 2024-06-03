import React from "react";
import styles from "./brands.module.css";
import Image from "next/image";
import EggDesktop from "../../public/images/desktop/image-transform.jpg";
import EggMobile from "../../public/images/mobile/image-transform.jpg";
import { fraunces } from "@/utils/HeadingsFont";
const Brands = () => {
  return (
    <section className={styles.brands}>
      <Image src={EggMobile} className={styles.MobileImage} alt="" />
      <Image src={EggDesktop} className={styles.DesktopImage} alt="" />
      <div className={styles.content}>
        <h2 className={`${fraunces.className} secondary-heading`}> Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a href="" className={styles.learnBtn}>Learn more</a>
      </div>
    </section>
  );
};

export default Brands;
