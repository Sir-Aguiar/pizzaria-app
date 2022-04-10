/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles/Header.module.css";
import * as MD from "react-icons/md";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <img src="/logo.png" alt="Logo da pizzaria" className={`${styles.logo}`} />
      <nav className={`${styles.navigation}`}>
        <Link href="/pedir" passHref>
          <button className={`${styles.order}`}>
            Pedir <MD.MdDeliveryDining size={20} />
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
