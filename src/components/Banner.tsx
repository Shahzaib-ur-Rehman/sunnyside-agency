import React from "react";
import Image from "next/image";
import ArrowDown from "../../public/images/icon-arrow-down.svg";
import { fraunces } from "@/utils/HeadingsFont";
import styles from "./banner.module.css";
const Banner = () => {
  return (
    <section className={styles.banner}>
      <h1 className={`${fraunces.className} title`}>We are creatives</h1>
      <Image
        className={styles.arrowImage}
        src={ArrowDown}
        width={36}
        height={114}
        alt="arrow down"
      />
    </section>
  );
};

export default Banner;
