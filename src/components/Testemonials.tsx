import React from "react";
import styles from "./testemonials.module.css";
import Image from "next/image";
import emily from "../../public/images/image-emily.jpg";
import jennie from "../../public/images/image-jennie.jpg";
import thomas from "../../public/images/image-thomas.jpg";
import { fraunces } from "@/utils/HeadingsFont";

const content = [
  {
    title: "Emily R.",
    designation: "Marketing Director",
    description:
      " We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    image: emily,
  },
  {
    title: "Thomas S.",
    designation: "Chief Operating Officer",
    description:
      "  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    image: thomas,
  },
  {
    title: "Jennie F.",
    designation: "Business Owner",
    description:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    image: jennie,
  },
];
const Testemonials = () => {
  return (
    <section className={styles.testemonials}>
      <h3 className={`${styles.testemonialsTitle} ${fraunces.className}`}>client testemonials</h3>
      <div className={`three-columns-layout-lg ${styles.conetntWrapper}`}>
        {content.map((user, index) => {
          return (
            <div className={styles.card} key={index}>
              <Image
                className={styles.cardImage}
                src={user.image}
                alt=""
                width={50}
                height={50}
              />
              <p>{user.description}</p>
              <div className={styles.authorWrapper}>
                <h4 className={fraunces.className}>{user.title}</h4>
                <p> {user.designation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testemonials;
