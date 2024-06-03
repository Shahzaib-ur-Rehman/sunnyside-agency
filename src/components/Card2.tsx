import React from "react";
import styles from "./card2.module.css";
import { fraunces } from "@/utils/HeadingsFont";
type Props = {
  title: string;
  description: string;
  background: string;
};
const Card2 = ({ title, description, background }: Props) => {
  return (
    <div className={`${background} ${styles.card}`}>
      <div className={styles.content}>
        <h3 className={`${fraunces.className} tertiary-heading`}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card2;
