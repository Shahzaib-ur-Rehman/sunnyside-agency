"use client";
import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import styles from "./header.module.css";
import Image from "next/image";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () =>{
    setIsNavOpen((prev)=>!prev)
  }
  return (
    <header className={`${styles.header} container`}>
      <a href="/" title="sunnyside">
        <Image src={logo} alt="" width={124} height={24} />
      </a>
      <button className={styles.navbar__toggler} onClick={toggleMenu} aria-controls="navigation">
        <span className="sr-only">Menu</span>
      </button>
      <div
        className={`${styles.header__action__container} ${
          isNavOpen && styles.active
        }`}
        id="navigation"
      >
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__list__items}>
              <a href="#" className={styles.navigation__list__items__link}>
                About
              </a>
            </li>
            <li className={styles.navigation__list__items}>
              <a href="#" className={styles.navigation__list__items__link}>
                Services
              </a>
            </li>
            <li className={styles.navigation__list__items}>
              <a href="#" className={styles.navigation__list__items__link}>
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn">Contact</button>
      </div>
    </header>
  );
};

export default Header;
