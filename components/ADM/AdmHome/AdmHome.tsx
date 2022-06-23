import React, { useContext, useState } from "react";
import Formulary from "../Form";
import styles from "../../../styles/adm.module.css";
import EmployeeHome from "../EmployeeHome/EmployeeHome";
import { LoginContext, LoginProvider } from "../../../contexts/Loggin/LogginContext";
const AdmHome: React.FC = () => {
  const { logged } = useContext(LoginContext);
  return <main className={styles.mainContainer}>{logged ? <EmployeeHome /> : <Formulary />}</main>;
};

export default AdmHome;
