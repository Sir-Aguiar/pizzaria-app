import { NextPage } from "next";
import React, { useState } from "react";
import AdmHome from "../components/ADM/AdmHome/AdmHome";
import { LoginProvider } from "../contexts/Loggin/LogginContext";
import styles from "../styles/adm.module.css";

const adm: NextPage = () => {
  return (
    <LoginProvider>
      <AdmHome />
    </LoginProvider>
  );
};

export default adm;
