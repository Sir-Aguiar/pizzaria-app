import React from "react";
import styles from "./styles/Header.module.css";
import * as MD from "react-icons/md";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <span className={`${styles.logo}`}>LOGO AQUI</span>
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
