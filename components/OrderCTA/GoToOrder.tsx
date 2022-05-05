import React from "react";
import {FaShare} from "react-icons/fa";
import Link from "next/link";
import styles from "./OrderCTA.module.css";

export const OrderButton: React.FC = () => {
  return (
    <Link href="/order/pedir" passHref>
      <button className={`${styles.order}`}>
        Pedir <FaShare size={18} />
      </button>
    </Link>
  );
};
