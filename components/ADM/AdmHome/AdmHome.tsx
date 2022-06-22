import React, { useState } from "react";
import Formulary from "../Form";
import styles from "../../../styles/adm.module.css";
import EmployeeHome from "../EmployeeHome/EmployeeHome";
const AdmHome: React.FC = () => {
  const [logged, setLogged] = useState(false);
  return (
    <main className={styles.mainContainer}>{logged ? <EmployeeHome /> : <Formulary setLogged={setLogged} />}</main>
  );
};

export default AdmHome;
