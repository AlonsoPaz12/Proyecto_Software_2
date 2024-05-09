'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar/TopBar';
import BottomBar from '@/components/BottomBar/BottomBar';
import styles from './page.module.css';

const AgendarCita = () => {
  

  return (
    <div className={styles.container}>
      <TopBar></TopBar>
      <BottomBar></BottomBar>
    </div>
  );
};

export default AgendarCita;
