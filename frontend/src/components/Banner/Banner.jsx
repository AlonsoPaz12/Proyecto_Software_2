import React from 'react';
import styles from './Banner.module.css';

const Banner = ({pageTitle, parrafo}) => {
  return (
    <div className={styles.banner}>

        <div className={styles.texto}>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p>{parrafo}</p>
        </div>

        <img
          alt=""
          src="/img/doctores2.png"
          className={styles.image}
        />
        
    </div>
  );
};

export default Banner;