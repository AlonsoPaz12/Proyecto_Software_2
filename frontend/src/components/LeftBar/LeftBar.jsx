import React from 'react';
import styles from "./LeftBar.module.css";
import LeftBarButton from '../LeftBarButton/LeftBarButton';


const LeftBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cabecera}>
            <img src='/img/logo.png' height='45' width='50'></img>
            <span className={styles.nombreLogo}>MedControl+</span>
        </div>
        <LeftBarButton/>
    </div>
  );
};

export default LeftBar;