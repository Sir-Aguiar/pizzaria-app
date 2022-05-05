/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles/Header.module.css";
import * as MD from "react-icons/md";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <Link href="/" passHref>
        <img src="/logo.png" alt="Logo da pizzaria" className={`${styles.logo}`} />
      </Link>
      <nav className={`${styles.navigation}`}>
        
      </nav>
    </header>
  );
};

export default Header;
