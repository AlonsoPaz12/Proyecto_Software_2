'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import LeftBar from '@/components/LeftBar/LeftBar';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import ImagenesCard from '@/components/ImagenesCard/ImagenesCard';

const ImagenesMedicas = () => {

  return (
    <div className={styles.container}>
      <LeftBar/>
      <div className={styles.body}>
        <div className={styles.cabecera}>
          <h5 style={{marginTop:'80px'}}><b>MIS IMÁGENES MÉDICAS</b></h5>
          <ProfileCard/>
        </div>
        <div class={styles.cardlabel}>
            <input className={styles.inputlabal} type="text" required/>
            <div className={styles.labelline}>Buscar por nombre de análisis</div>
        </div>
        <div className={styles.cardbody}>
          <ImagenesCard/>
          <ImagenesCard/>
          <ImagenesCard/>
        </div>
      </div>
    </div>
  );
};

export default ImagenesMedicas;